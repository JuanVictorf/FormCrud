/* 
import { Request, Response } from 'express';
import { UpdateUserService } from '../../services/user/updateUserService';

class UpdateUserController {
    async handle(req: Request, res: Response) {

        const { id } = req.query.id as string;

        const updateUserService = new UpdateUserService();

        const user = await updateUserService.execute({
            id,
        });

        return res.json(user);

    }
}

export { UpdateUserController }; */