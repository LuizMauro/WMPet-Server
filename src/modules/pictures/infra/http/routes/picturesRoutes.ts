import { Router } from 'express';

import authenticated from '@modules/users/infra/http/middlewares/Authenticated';
import PicturesController from '../controllers/PicturesController';

const picturesRouter = Router();
const picturesController = new PicturesController();

picturesRouter.use(authenticated);

picturesRouter.get('/', picturesController.index)
picturesRouter.post('/', picturesController.create);

export default picturesRouter;