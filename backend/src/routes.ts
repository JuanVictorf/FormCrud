import { Router} from 'express';

import { CreateUserController } from './controllers/user/createUserController';
import { ListUsersController } from './controllers/user/listUsersController';
import { DeleteUserController } from './controllers/user/deleteUserController';
import { UpdateUserController } from './controllers/user/updateUserController';

const router = Router();

router.post('/users', new CreateUserController().handle);
router.get('/listusers', new ListUsersController().handle);
router.delete('/removeuser', new DeleteUserController().handle);
router.put('/updateuser', new UpdateUserController().handle);

export { router };