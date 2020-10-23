import { Router } from 'express';

import authenticated from '@modules/users/infra/http/middlewares/Authenticated';
import SearchAnimalController from '../controllers/SearchAnimalController';
import GetRangeSearchAnimalsController from '../controllers/GetRangeSearchAnimalsController';

const searchAnimalRouter = Router();
const searchAnimalController = new SearchAnimalController();
const getRangeSearchAnimalsController = new GetRangeSearchAnimalsController();

searchAnimalRouter.use(authenticated);

searchAnimalRouter.post('/', searchAnimalController.create);
searchAnimalRouter.get('/', searchAnimalController.index);
searchAnimalRouter.get(
  '/range/:lng/:lat',
  getRangeSearchAnimalsController.index,
);
export default searchAnimalRouter;
