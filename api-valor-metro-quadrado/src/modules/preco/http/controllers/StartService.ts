import PrecoImovelService from "@modules/preco/services/precoImovelService";
import AppError from "@shared/errors/AppError";
import RabbitmqServer from "@shared/rabbitmq-server";

import {Request, Response} from 'express';

export default class StartServiceController  {
    public async show (request: Request, response: Response){
        
        try {
            const server = new RabbitmqServer('amqp://admin:admin@rabbitmq:5672');
            await server.start();

           
            await server.createQueue('fila01');
            await server.createQueue('fila02');
        

             await server.consume('fila01', async message =>{
                //Envia para a fila02
                
                const precoService = new PrecoImovelService();
        
                const preco = precoService.find();
        
                await server.publishInQueue('fila02', JSON.stringify(preco));
        
            });

            return response.status(204).send();

        } catch (error) {
            if(error instanceof AppError){
                return response.status(error.statusCode).json({ error: error.message });
            }
            return response.status(500).json({error: error.message})    
        }
        
    }   
}