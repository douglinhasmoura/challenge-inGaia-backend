import PrecoImovelService from "@modules/preco/services/precoImovelService";
import AppError from "@shared/errors/AppError";
import { Request, Response } from "express";

export default class PrecoController  {
    public show (request: Request, response: Response): Response{
        try {
          
            const precoService = new PrecoImovelService();

            const preco = precoService.find();

            return response.json({preco});

        } catch (error) {
            if(error instanceof AppError){
                return response.status(error.statusCode).json({ error: error.message });
            }
            return response.status(500).json({error: error.message})    
        }
        
    }   
}