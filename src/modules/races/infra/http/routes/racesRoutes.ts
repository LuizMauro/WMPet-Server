import { Router } from 'express';

import RacesController from '../controllers/RacesController';

const racesRouter = Router();
const racesController = new RacesController();

// racesController.use(authenticated);

racesRouter.post('/', racesController.create);
racesRouter.get('/', racesController.index);

export default racesRouter;
