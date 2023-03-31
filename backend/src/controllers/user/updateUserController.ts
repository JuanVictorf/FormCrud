/*import { Request, Response } from 'express';
import { UpdateUserService } from '../../services/user/updateUserService';

class UpdateUserController {
    async handle(req: Request, res: Response) {

        const { id } = req.params;
        const { name, email } = req.body;


        const updateUserService = new UpdateUserService();

        /*const user = await updateUserService.execute({
            where: { id: id },
            data: { name, email },
        });
        

        //const user = await updateUserService.execute(name, email);

        const user = await updateUserService.execute({ id, name, email });



        return res.json(user);

    }
}

export { UpdateUserController };

*/

import { Request, Response } from 'express';
import { UpdateUserService } from '../../services/user/updateUserService';

class UpdateUserController {
  async handle(req: Request, res: Response): Promise<Response>{
    const { id } = req.params;
    const { name, email } = req.body;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute({
      id,
      name,
      email
    });
    


    return res.json(user);
  }
}

export { UpdateUserController };