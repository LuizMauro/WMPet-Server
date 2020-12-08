import { Router } from 'express';
import PartnersController from '../controllers/PartnersController';
import PartnersDetailsController from '../controllers/PartnersDetailsController';
import GetRangePartnersController from '../controllers/GetRangePartnersController';

const partnersRouter = Router();
const partnersController = new PartnersController();
const rangePartnersController = new GetRangePartnersController();
const partnersDetailsController = new PartnersDetailsController();

partnersRouter.post('/', partnersController.create);
partnersRouter.get('/', partnersController.index);

partnersRouter.get('/:id', partnersDetailsController.index);

partnersRouter.get('/range/:lng/:lat', rangePartnersController.index);

export default partnersRouter;
