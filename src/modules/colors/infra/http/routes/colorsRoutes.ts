import { Router } from 'express';

import ColorsController from '../controllers/ColorsController';

const colorsRouter = Router();
const colorsController = new ColorsController();


colorsRouter.post('/', colorsController.create);
colorsRouter.get('/', colorsController.index);

export default colorsRouter;
