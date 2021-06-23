import { Router } from "express";

import PrecoController from "../controllers/PrecoController";

const precoRouter = Router();
const precoController = new PrecoController();

/**
 * @swagger
 * /preco:
 *   get:
 *     description: Metódo responsável para retornar o valor de um m².
 *     responses:
 *       200:
 *         description: Retorna o valor do m².
 */
precoRouter.get('/', precoController.show);

export default precoRouter;