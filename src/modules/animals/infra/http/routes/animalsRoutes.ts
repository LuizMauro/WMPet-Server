import { Router } from 'express';

import authenticated from '@modules/users/infra/http/middlewares/Authenticated';
import AnimalsController from '../controllers/AnimalsController';

const animalsRouter = Router();
const animalsController = new AnimalsController();

animalsRouter.use(authenticated);

animalsRouter.post('/', animalsController.create);
animalsRouter.get('/', animalsController.index);

export default animalsRouter;
