import { Router } from 'express';

import authenticated from '@modules/users/infra/http/middlewares/Authenticated';
import ContactController from '../controllers/ContactsController';

const contactRouter = Router();
const contactController = new ContactController();

contactRouter.use(authenticated);

contactRouter.post('/', contactController.create);
// contactRouter.get('/', contactController.)

export default contactRouter;
