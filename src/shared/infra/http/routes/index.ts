import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/usersRoutes';
import sessionsRouter from '@modules/users/infra/http/routes/sessionsRoutes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/session', sessionsRouter);

export default routes;
