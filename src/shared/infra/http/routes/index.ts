import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/usersRoutes';
import sessionsRouter from '@modules/users/infra/http/routes/sessionsRoutes';
import AnimalsRouter from '@modules/animals/infra/http/routes/animalsRoutes';
import ColorsRouter from '@modules/colors/infra/http/routes/colorsRoutes';
import RacesRouter from '@modules/races/infra/http/routes/racesRoutes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/session', sessionsRouter);

routes.use('/animals', AnimalsRouter);

routes.use('/colors', ColorsRouter);

routes.use('/races', RacesRouter);

export default routes;
