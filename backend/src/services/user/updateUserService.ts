/*import prismaClient from "../../prisma";
import { Request, Response } from "express";

interface UpdateRequest {
    id: string;
    name: string;
    email: string;
}

class UpdateUserService{
    //async execute(req: Request, res: Response){ 
    async execute({ id, name, email }: UpdateRequest) {
   
        
        //const { id } = req.params;
        //const { name, email } = req.body as UpdateRequest;
        //const { name, email } = req.body;


        const user = await prismaClient.user.update({
            where: {
                id
            },
            data: {
                name,
                email
              },
            });

        return user;

    }
}

export { UpdateUserService }; 

// Comentar /* e */

import prismaClient from "../../prisma";

interface UpdateUserData {
  id: string;
  name: string;
  email: string;
}

class UpdateUserService {
  async execute({ id, name, email }: UpdateUserData) {
    const user = await prismaClient.user.update({
      where: {
        id //Passando o ID certo, ele atualiza.
      },
      data: {
        name: name, // Passando a atualização dentro daqui, funciona.
        email: email
      },
      
    });

    return user;

  }
}

export { UpdateUserService };