import { Router } from "express";

import StartService from "../controllers/StartService";

const startRouter = Router();
const startController = new StartService();

startRouter.get('/', startController.show);

export default startRouter;