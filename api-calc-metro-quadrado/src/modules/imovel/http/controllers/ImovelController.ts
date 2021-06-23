import AppError from "@shared/errors/AppError";
import functions from "@shared/utils/functions";
import { Request, Response } from "express";
import {config} from 'dotenv';
import axios, { AxiosError} from "axios";

import RabbitmqServer from "../../../../rabbitmq-server";

import Preco from "@modules/imovel/entities/preco";


config();

export default class ImovelController {

    public async index(request: Request, response: Response) {

        try {
            const metros: number = request.query.metros as unknown as number;

            if (!metros) {
                throw new AppError('Metragem não informada.', 400);
            }

            const fun = new functions();
            if (!fun.between(metros, 10, 10000)) {
                throw new AppError('Metragem não está dentro dos parâmetros, informe uma metragem entre 10 e 10.000 m².', 400);
            }


            const base_url = process.env.BASE_URL_RABBITMQ;

            const server = new RabbitmqServer(base_url || '');
            await server.start();
            const result = await server.publishInQueue('fila01', JSON.stringify({metros: metros}));

            var total = 0;

            await server.consume('fila02', (message) =>{
              
                //Recebe Fila02
                const valor_metro:Preco  = JSON.parse(message.content.toString())

                const total = valor_metro.valor * metros;

                return response.json({total: total});
             
            });

        } catch (error) {
            if(error instanceof AppError){
                return response.status(error.statusCode).json({ error: error.message });
            }

            return response.status(500).json({error: error.message})
            
        }
    }

    public async show(request: Request, response: Response) {

        try {
            const metros: number = request.query.metros as unknown as number;

            if (!metros) {
                throw new AppError('Metragem não informada.', 400);
            }

            const fun = new functions();
            if (!fun.between(metros, 10, 10000)) {
                throw new AppError('Metragem não está dentro dos parâmetros, informe uma metragem entre 10 e 10.000 m².', 400);
            }

            const req = await axios.get(`${process.env.BASE_URL_API_1}/preco`);
            

            if (req.status === 200) {

                const preco: Preco = req.data.preco as Preco;

                const total = fun.calcValue(preco.valor, metros);

                return response.json({ total });

            } else {
                throw new AppError('Erro interno do servidor', req.status);
            }

            
        } catch (error) {
            if(error instanceof AppError){
                return response.status(error.statusCode).json({ error: error.message });
            }

            return response.status(500).json({error: error.message})
            
        }
    }

    


}