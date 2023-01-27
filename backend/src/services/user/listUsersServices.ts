import prismaClient from "../../prisma";

class ListUsersServices{
    async execute(){

        const users = await prismaClient.user.findMany({
            orderBy:{
                created_at: 'desc'
            }
        })

        return users;

    }
}

export { ListUsersServices};