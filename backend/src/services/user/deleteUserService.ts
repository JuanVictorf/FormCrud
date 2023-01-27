import prismaClient from "../../prisma";

interface DeleteRequest{
    id: string;
}

class DeleteUserService{
    async execute({ id }: DeleteRequest){

        const user = await prismaClient.user.delete({
            where: {
                id: id,
            }
        })

        return user;
    }
}

export { DeleteUserService};