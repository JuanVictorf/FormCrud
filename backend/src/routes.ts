import { Router} from 'express';

import { CreateUserController } from './controllers/user/createUserController';
import { ListUsersController } from './controllers/user/listUsersController';

const router = Router();

router.post('/users', new CreateUserController().handle);
router.get('/listusers', new ListUsersController().handle);

export { router };