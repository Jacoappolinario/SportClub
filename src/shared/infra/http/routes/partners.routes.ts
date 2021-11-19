import { Router } from 'express';

import { CreatePartnerController } from '@modules/club/useCases/createPartner/CreatePartnerController';
import { DeletePartnerController } from '@modules/club/useCases/deletePartners/DeletePartnerController';
import { ListPartnersController } from '@modules/club/useCases/listPartner/ListPartnersController';
import { UpdatePartnerController } from '@modules/club/useCases/updatePartners/UpdatePartnerController';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensureAuthenticated';

const partnersRoutes = Router();

const createPartnerController = new CreatePartnerController();
const listPartnersController = new ListPartnersController();
const updatePartnerController = new UpdatePartnerController();
const deletePartnerController = new DeletePartnerController();

partnersRoutes.post('/', ensureAuthenticated, createPartnerController.handle);
partnersRoutes.get('/', ensureAuthenticated, listPartnersController.handle);
partnersRoutes.patch(
  '/:id',
  ensureAuthenticated,
  updatePartnerController.handle,
);
partnersRoutes.delete(
  '/:id',
  ensureAuthenticated,
  deletePartnerController.handle,
);

export { partnersRoutes };
