import { useState, ChangeEvent, FormEvent} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/home.module.scss';
import { toast } from 'react-toastify';
import 'typeface-roboto';
import { setupAPIClient } from '../services/api';
import { Navigate, useNavigate } from 'react-router-dom';




type Users = {
    id: string;
    name: string;
    email: string;
    numero: string;
    cidade: string;
}

interface UserProps{
    users: Users[];
}


export default function List({ users }: UserProps) {
      

    const [userList, setUserList] = useState(users || []);

    async function getUsers(id: string){

        const apiClient = setupAPIClient();

        const response = await apiClient.get('/listusers', {
            params: {
                id: id,
            }
        });

        setUserList(response.data);
        console.log(response);
    
    }


    async function handleClickEditar(id: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
        //alert("Clicado no botão editar!");
        const apiClient = setupAPIClient();

        await apiClient.get('/edit', {
            params: {
                id: id,
            }
        });

    }


    async function handleClickExcluir(id: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> {
        //console.log("Id clicado " + id);

        const apiClient = setupAPIClient();

        await apiClient.delete('/removeuser', {
            params: {
                id: id,
            }
        });
  
        const novaListaDeUsers = users.filter((users) => users.id !== id);
        setUserList(novaListaDeUsers);

        toast.success("Usuário excluído com sucesso!");

    }

    


  return (
    <>
    <Head>
      <title>Listagem de usuário</title>
    </Head>
    <main className={styles.container}>
                <div className={styles.containerHeader}>
                    <h1>Usuários cadastrados</h1>
                </div>
    </main>


    <table className={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {userList.map((users) => (
          <tr key={users.id}>
            <td>{users.id}</td>
            <td>{users.name}</td>
            <td>{users.email}</td>
            <td>
                <button onClick={() => handleClickExcluir(users.id)}>Excluir</button>
            </td>

            <td>
              <Link href={`/edit/${users.id}`}>Editar</Link>
            </td>
            
            

  
          </tr>
        ))}
      </tbody>
    </table>
    


      <Link href="/" className={styles.link}>
        <p className={styles.text}>Cadastrar usuários</p>
      </Link>
    </>
  )
}


export const getServerSideProps = async (ctx: any) => {  

    const apiClient = setupAPIClient(ctx);

    const users = await apiClient.get('/listusers');
    

    return { 
        props: { 
            users: users.data 
        } 
    }
  }