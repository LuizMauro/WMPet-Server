import { Router } from 'express';

import authenticated from '@modules/users/infra/http/middlewares/Authenticated';
import AnimalsController from '../controllers/AnimalsController';
import UserAnimalsController from '../controllers/UserAnimalsController';

const animalsRouter = Router();
const animalsController = new AnimalsController();
const userAnimalsController = new UserAnimalsController();
animalsRouter.use(authenticated);

animalsRouter.post('/', animalsController.create);

animalsRouter.get('/', animalsController.index);
animalsRouter.get('/:id', userAnimalsController.index);

export default animalsRouter;
