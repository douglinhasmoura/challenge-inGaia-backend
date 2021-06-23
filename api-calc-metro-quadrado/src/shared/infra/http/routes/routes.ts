import { Router } from "express";
import imovelRouter from "@modules/imovel/http/routes/imovel.routes";

const routes = Router();

routes.use('/imovel', imovelRouter);

export default routes;