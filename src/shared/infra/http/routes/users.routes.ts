import { Router } from 'express';

import { CreateUserController } from '@modules/administrators/useCases/createUser/CreateUserController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post('/', ensureAuthenticated, createUserController.handle);

export { usersRoutes };
