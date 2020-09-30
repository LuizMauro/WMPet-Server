import { Router } from 'express';

import authenticated from '@modules/users/infra/http/middlewares/Authenticated';
import SearchAnimalController from '../controllers/SearchAnimalController';

const searchAnimalRouter = Router();
const searchAnimalController = new SearchAnimalController();

searchAnimalRouter.use(authenticated);

searchAnimalRouter.post('/', searchAnimalController.create);
searchAnimalRouter.get('/', searchAnimalController.index);
export default searchAnimalRouter;
