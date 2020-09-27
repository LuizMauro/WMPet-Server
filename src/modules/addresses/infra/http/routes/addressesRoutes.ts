import { Router } from 'express';

import authenticated from '@modules/users/infra/http/middlewares/Authenticated';
import AddressesController from '../controllers/AddressesController';

const addressesRouter = Router();
const addressesController = new AddressesController();

addressesRouter.use(authenticated);

addressesRouter.post('/', addressesController.create);
addressesRouter.get('/', addressesController.index);

export default addressesRouter;
