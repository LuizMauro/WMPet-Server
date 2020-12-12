import { Router } from 'express';

import authenticated from '@modules/users/infra/http/middlewares/Authenticated';
import AddressesController from '../controllers/AddressesController';
import UserAddressesController from '../controllers/UserAddressesController';


const addressesRouter = Router();
const addressesController = new AddressesController();
const userAddressesController = new UserAddressesController();

addressesRouter.use(authenticated);

addressesRouter.post('/', addressesController.create);
addressesRouter.get('/', addressesController.index);
addressesRouter.get('/:id', userAddressesController.index);

export default addressesRouter;
