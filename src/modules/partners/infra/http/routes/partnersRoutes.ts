import { Router } from 'express';
import PartnersController from '../controllers/PartnersController';

const partnersRouter = Router();
const partnersController = new PartnersController();

partnersRouter.post('/', partnersController.create);
partnersRouter.get('/', partnersController.index);

export default partnersRouter;
