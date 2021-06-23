import { Router, Request, Response, request, response } from "express";

import ImovelController from "../controllers/ImovelController";

const imovelRouter = Router();
const imovelController = new ImovelController();

/**
 * @swagger
 * /imovel/calcular:
 *   get:
 *     description: Metódo para calcular o m² de um determinado imóvel.
 *     parameters:
 *     - in: query
 *       name: metros
 *       type: number
 *       required: true
 *       description: Valor em número da metragem.
 *     responses:
 *       200:
 *         description: Retorna o valor calculado do m².
 */
imovelRouter.get('/calcular', imovelController.show);

export default imovelRouter;