import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import UpdateCoordinatesController from '../controllers/UpdateCoordinatesController';

const usersRouter = Router();
const usersController = new UsersController();
const updateCoordinatesController = new UpdateCoordinatesController();

usersRouter.post('/', usersController.create);
usersRouter.get('/', usersController.index);
usersRouter.put('/edit-coordinates/:useID', updateCoordinatesController.update);

export default usersRouter;
