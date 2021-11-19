import { Router } from 'express';
import multer from 'multer';

import { CreateSportController } from '@modules/club/useCases/createSport/CreateSportController';
import { ImportSportController } from '@modules/club/useCases/importSport/ImportSportController';
import { ListSportsController } from '@modules/club/useCases/listSports/ListSportsController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const sportsRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createSportController = new CreateSportController();
const importSportController = new ImportSportController();
const listSportsController = new ListSportsController();

sportsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createSportController.handle,
);

sportsRoutes.get('/', ensureAuthenticated, listSportsController.handle);

sportsRoutes.post(
  '/import',
  upload.single('file'),
  ensureAuthenticated,
  ensureAdmin,
  importSportController.handle,
);

export { sportsRoutes };
