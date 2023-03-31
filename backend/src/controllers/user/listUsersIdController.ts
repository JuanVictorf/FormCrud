/*import { Request, Response } from "express";
import prismaClient from "../../prisma";
import { ListUsersIdServices } from "../../services/user/listUsersIDServices";

class ListUsersIdController{
    async handle(req: Request, res: Response){


        const { id } = req.params;

        const listUsersIdServices = new ListUsersIdServices();
    
        const user = await listUsersIdServices.execute(id);

        return res.json(user);

    }
}

export { ListUsersIdController };

*/


import { Request, Response } from "express";
import prismaClient from "../../prisma";
import { ListUsersIdServices } from "../../services/user/listUsersIDServices";



class ListUsersIdController {
    async handle(request: Request, response: Response) {
      const { id } = request.params;
  
      const listUsersIdServices = new ListUsersIdServices();
  
      try {
        const user = await listUsersIdServices.getUserById({ id });
  
        return response.json(user);
        
      } catch (error) {
        return response.status(400).json;
      }
    }
  }
  
export { ListUsersIdController };