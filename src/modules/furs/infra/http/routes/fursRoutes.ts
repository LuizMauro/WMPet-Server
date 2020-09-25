import { Router } from 'express';

import authenticated from '@modules/users/infra/http/middlewares/Authenticated';
import FursController from '../controllers/FursController';

const fursRouter = Router();
const fursController = new FursController();

fursRouter.use(authenticated);

fursRouter.post('/', fursController.create);
fursRouter.get('/', fursController.index);

export default fursRouter;
