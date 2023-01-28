/* import prismaClient from "../../prisma";
import { Request, Response } from "express";

interface UpdateRequest {
    id: string;
    name: string;
    email: string;
    numero: string;
    cidade: string;
}

class UpdateUserService{
    async execute(req: Request, res: Response, { id, name, email, numero, cidade}: UpdateRequest){

        const user = await prismaClient.user.update({
            where: {
                id: 'id',
            }

        return user;

    }
}

export { UpdateUserService }; */