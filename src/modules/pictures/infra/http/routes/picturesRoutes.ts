import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '@config/upload';

import authenticated from '@modules/users/infra/http/middlewares/Authenticated';
import PicturesController from '../controllers/PicturesController';
import TesteUpload from '../controllers/testeUpload';

const upload = multer(uploadConfig.multer);
const picturesRouter = Router();
const picturesController = new PicturesController();
const testeUpload = new TesteUpload();

picturesRouter.use(authenticated);

picturesRouter.get('/', picturesController.index);
picturesRouter.post('/', picturesController.create);

picturesRouter.patch('/photo', upload.single('photo-user'), testeUpload.update);

export default picturesRouter;
