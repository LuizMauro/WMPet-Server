import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import UpdateCoordinatesController from '../controllers/UpdateCoordinatesController';
import UpdateDeviceIDController from '../controllers/UpdateDeviceIDController';

const usersRouter = Router();
const usersController = new UsersController();
const updateCoordinatesController = new UpdateCoordinatesController();
const updateDeviceIDController = new UpdateDeviceIDController();

usersRouter.post('/', usersController.create);
usersRouter.get('/', usersController.index);
usersRouter.put('/edit/coordinates/:useID', updateCoordinatesController.update);
usersRouter.put('/edit/deviceid/:useID', updateDeviceIDController.update);

export default usersRouter;
