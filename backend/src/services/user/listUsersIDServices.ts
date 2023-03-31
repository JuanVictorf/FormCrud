/*import prismaClient from "../../prisma";

class ListUsersIdServices{
    async execute(id: string){

        const user = await prismaClient.user.findUnique({
            where: {
                id: id,
              },
        });

        if (!user) {
            throw new Error('User not found');
          }

        return user;

    }
}

export { ListUsersIdServices };

*/

interface GetRequest{
    id: string;
}

import prismaClient from "../../prisma";

class ListUsersIdServices {
    async getUserById({id}: GetRequest) {
      const user = await prismaClient.user.findFirst({
        where: {
            id,
        }
      });
  
      if (!user) {
        throw new Error('User not found');
      }
  
      return user;
    }
  }

export { ListUsersIdServices };
  
//export default ListUsersIdServices;