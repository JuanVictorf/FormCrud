import prismaClient from "../../prisma";

interface UserRequest{
    name: string;
    email: string;
    numero: string;
    cidade: string;
}

class CreateUserService{
    async execute({ name, email, numero, cidade }: UserRequest){
        
        // precisamos verificar se foi enviado os dados corretamente.
        if(!name || !email || !numero || !cidade){
            throw new Error("Verificar as informações que foram enviadas.");
        }

        // Verificando se já existe email cadastrado
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })

        if(userAlreadyExists){
            throw new Error("Usuário já cadastrado.");
        }

        const user = await prismaClient.user.create({
            data: {
                name: name,
                email: email,
                numero: numero,
                cidade: cidade,
            }
        })

        return user;

    }
}

export { CreateUserService};