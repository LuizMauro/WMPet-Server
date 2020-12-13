import { Router } from 'express';

import authenticated from '@modules/users/infra/http/middlewares/Authenticated';
import ContactController from '../controllers/ContactsController';
import ContactUserController from '../controllers/ContactsUserController';

const contactRouter = Router();
const contactController = new ContactController();
const contactUserController = new ContactUserController();

contactRouter.post('/', contactController.create);
// contactRouter.get('/', contactController.)

contactRouter.use(authenticated);
contactRouter.get('/:id', contactUserController.index);

export default contactRouter;
