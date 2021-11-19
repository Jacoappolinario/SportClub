import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { partnersRoutes } from './partners.routes';
import { sportsRoutes } from './sports.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/partners', partnersRoutes);
router.use('/sports', sportsRoutes);
router.use(authenticateRoutes);

export { router };
