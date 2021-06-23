import { Router } from "express";

import precoRouter from "@modules/preco/http/routes/preco.routes";
import startRouter from '@modules/preco/http/routes/service.routes';

const routes = Router();

routes.use('/preco',precoRouter);
// routes.use('/service', startRouter)

export default routes;