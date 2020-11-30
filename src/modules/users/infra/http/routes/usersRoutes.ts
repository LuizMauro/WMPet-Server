import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '@config/upload';
import UsersController from '../controllers/UsersController';
import UpdateCoordinatesController from '../controllers/UpdateCoordinatesController';
import UpdateDeviceIDController from '../controllers/UpdateDeviceIDController';
import GetRangeUsersController from '../controllers/GetRangeUsersController';

const upload = multer(uploadConfig.multer);
const usersRouter = Router();
const usersController = new UsersController();
const updateCoordinatesController = new UpdateCoordinatesController();
const updateDeviceIDController = new UpdateDeviceIDController();
const getRangeUsersController = new GetRangeUsersController();

usersRouter.post('/', upload.single('photo-user'), usersController.create);
usersRouter.get('/', usersController.index);
usersRouter.put('/edit/coordinates/:useID', updateCoordinatesController.update);
usersRouter.put('/edit/deviceid/:useID', updateDeviceIDController.update);
usersRouter.get('/range', getRangeUsersController.index);

usersRouter.patch(
  '/photo',
  upload.single('photo-user'),
  async (request, response) => {
    return response.json({ photo: request.file.filename });
  },
);

export default usersRouter;
