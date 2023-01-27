import { Request, Response } from "express";
import prismaClient from "../../prisma";
import { ListUsersServices } from "../../services/user/listUsersServices";

class ListUsersController{
    async handle(req: Request, res: Response){

        const listUsersServices = new ListUsersServices();

        const users = await listUsersServices.execute();

        return res.json(users);

    }
}

export { ListUsersController };