import { Router } from 'express';

import FursController from '../controllers/FursController';

const fursRouter = Router();
const fursController = new FursController();


fursRouter.post('/', fursController.create);
fursRouter.get('/', fursController.index);

export default fursRouter;
