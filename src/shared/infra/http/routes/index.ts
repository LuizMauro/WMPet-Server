import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/usersRoutes';
import sessionsRouter from '@modules/users/infra/http/routes/sessionsRoutes';
import AnimalsRouter from '@modules/animals/infra/http/routes/animalsRoutes';
import ColorsRouter from '@modules/colors/infra/http/routes/colorsRoutes';
import RacesRouter from '@modules/races/infra/http/routes/racesRoutes';
import ContactRouter from '@modules/contacts/infra/http/routes/contactsRoutes';
import FursRouter from '@modules/furs/infra/http/routes/fursRoutes';
import AddressesRouter from '@modules/addresses/infra/http/routes/addressesRoutes';
import SearchAnimalsRoutes from '@modules/search_animals/infra/http/routes/searchAnimalsRoutes';

import PicturesRouter from '@modules/pictures/infra/http/routes/picturesRoutes';

const routes = Router();

routes.use('/users', usersRouter);

routes.use('/session', sessionsRouter);

routes.use('/contacts', ContactRouter);

routes.use('/animals', AnimalsRouter);

routes.use('/colors', ColorsRouter);

routes.use('/races', RacesRouter);

routes.use('/furs', FursRouter);

routes.use('/addresses', AddressesRouter);

routes.use('/search-animals', SearchAnimalsRoutes);

routes.use('/pictures', PicturesRouter);

export default routes;
