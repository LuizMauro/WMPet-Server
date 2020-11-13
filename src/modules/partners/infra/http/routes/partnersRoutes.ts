import { Router } from 'express';
import PartnersController from '../controllers/PartnersController';
import GetRangePartnersController from '../controllers/GetRangePartnersController';

const partnersRouter = Router();
const partnersController = new PartnersController();
const rangePartnersController = new GetRangePartnersController();

partnersRouter.post('/', partnersController.create);
partnersRouter.get('/', partnersController.index);
partnersRouter.get('/range/:lng/:lat', rangePartnersController.index);

export default partnersRouter;
