import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/usersRoutes';
import sessionsRouter from '@modules/users/infra/http/routes/sessionsRoutes';
import AnimalsRouter from '@modules/animals/infra/http/routes/animalsRoutes';
import ColorsRouter from '@modules/colors/infra/http/routes/colorsRoutes';
import RacesRouter from '@modules/races/infra/http/routes/racesRoutes';
import ContactRouter from '@modules/contacts/infra/http/routes/contactsRoutes';
import FursRouter from '@modules/furs/infra/http/routes/fursRoutes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/session', sessionsRouter);
routes.use('/contacts', ContactRouter);

routes.use('/animals', AnimalsRouter);

routes.use('/colors', ColorsRouter);

routes.use('/races', RacesRouter);

routes.use('/furs', FursRouter);

export default routes;
