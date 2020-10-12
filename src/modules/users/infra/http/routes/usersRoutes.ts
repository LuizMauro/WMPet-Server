import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import UpdateCoordinatesController from '../controllers/UpdateCoordinatesController';
import UpdateDeviceIDController from '../controllers/UpdateDeviceIDController';
import GetRangeUsersController from '../controllers/GetRangeUsersController';

const usersRouter = Router();
const usersController = new UsersController();
const updateCoordinatesController = new UpdateCoordinatesController();
const updateDeviceIDController = new UpdateDeviceIDController();
const getRangeUsersController = new GetRangeUsersController();

usersRouter.post('/', usersController.create);
usersRouter.get('/', usersController.index);
usersRouter.put('/edit/coordinates/:useID', updateCoordinatesController.update);
usersRouter.put('/edit/deviceid/:useID', updateDeviceIDController.update);
usersRouter.get('/range', getRangeUsersController.index);

export default usersRouter;
