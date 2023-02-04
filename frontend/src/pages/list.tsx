import { useState, ChangeEvent, FormEvent} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../styles/home.module.scss';
import { toast } from 'react-toastify';
import 'typeface-roboto';


import { setupAPIClient } from '../services/api';

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
        console.log("teste");
    
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

    <article className={styles.listUsers}>
        {userList.map(users => (
            <button onClick={ () => getUsers(users.id) }>
                <span>Mesa {users.name}</span>      
            </button>
        ))}

    </article>

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