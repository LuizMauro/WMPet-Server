import { Router } from 'express';

import authenticated from '@modules/users/infra/http/middlewares/Authenticated';
import uploadConfig from '@config/upload';
import multer from 'multer';
import AnimalsController from '../controllers/AnimalsController';
import UserAnimalsController from '../controllers/UserAnimalsController';

const upload = multer(uploadConfig.multer);
const animalsRouter = Router();
const animalsController = new AnimalsController();
const userAnimalsController = new UserAnimalsController();

animalsRouter.use(authenticated);

animalsRouter.post('/', upload.array('images'), animalsController.create);

animalsRouter.get('/', animalsController.index);
animalsRouter.get('/getAnimalID/:id', animalsController.getId);
animalsRouter.get('/:id', userAnimalsController.index);

export default animalsRouter;
