import { Router } from 'express';

import authenticated from '@modules/users/infra/http/middlewares/Authenticated';
import ColorsController from '../controllers/ColorsController';

const colorsRouter = Router();
const colorsController = new ColorsController();

//colorsRouter.use(authenticated);

colorsRouter.post('/', colorsController.create);

export default colorsRouter;
