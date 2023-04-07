import { Router} from 'express';

import { CreateUserController } from './controllers/user/createUserController';
import { ListUsersController } from './controllers/user/listUsersController';
import { ListUsersIdController } from './controllers/user/listUsersIdController';
import { DeleteUserController } from './controllers/user/deleteUserController';
import { UpdateUserController } from './controllers/user/updateUserController';



const router = Router();

router.post('/users', new CreateUserController().handle);
router.get('/listusers', new ListUsersController().handle);
router.get('/listby/:id', new ListUsersIdController().handle);
//router.get('/users/:id', new ListUsersIdController().handle);
router.delete('/removeuser', new DeleteUserController().handle);
router.put('/users/:id', new UpdateUserController().handle);

export { router };