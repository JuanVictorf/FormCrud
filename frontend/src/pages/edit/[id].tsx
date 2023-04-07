import { useState, ChangeEvent, FormEvent, useEffect} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Header } from '../../components/Header';
import styles from '../../../styles/home.module.scss';
import { toast } from 'react-toastify';
import 'typeface-roboto';
import { useRouter } from 'next/router';





import { setupAPIClient } from '../../services/api';
import { useParams } from 'react-router-dom';

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



export default function Edit() {
  
  //const { id } = useParams();
 
  const router = useRouter();
  const { id } = router.query;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  //console.log(id); // Buscando o ID - está trazendo
  
  
  const apiClient = setupAPIClient();
 

  const [user, setUser] = useState<Users | null>(null);

  
  useEffect(() => {
    async function loadUser() {
      try {
        const response = await apiClient.get(`/listby/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    loadUser();
  }, [id]);

  
  
    /*async function getUsers(id: string){

        const apiClient = setupAPIClient();

        const response = await apiClient.get(`/listby/${id}`, {
            params: {
                id: id,
            }
        });

        setUser(response.data);
        console.log(response);
        console.log(user.name);
    
    }
    */

    
    

  async function handleUpdate(event: FormEvent) {
    event.preventDefault();

    const apiClient = setupAPIClient();

    await apiClient.put(`/users/${id}`, {
      name: name,
      email: email
    })
    
    console.log(name);
    console.log(email);
    
    toast.success("Usuário atualizado com sucesso!");

    setName(name);
    setEmail(email);
   

    
  }


  return (
    <>
    <Head>
      <title>Editar Cadastro de usuário</title>
    </Head>
    <Header/>
    <div className={styles.cadastro}>
      <h1>Editar Cadastro de usuário</h1>
      <form onSubmit={handleUpdate}>
        <input type="text" className={styles.input} placeholder="Nome"
        value={name}
        onChange={ (e) => setName(e.target.value)}
        /*value={user?.name ?? ''}*/
        />
        <input type="text" className={styles.input} placeholder="Email"
         value={email}
         onChange={ (e) => setEmail(e.target.value)}
         /*value={user?.email ?? ''}*/
        />
        <button className={styles.button} type="submit"> 
          <a>Atualizar</a>
        </button>
      </form>

      <Link href="/list">
        <p className={styles.text}>Visualizar todos os usuários cadastrados</p>
      </Link>
    </div>
    </>
  )
}


function express() {
  throw new Error('Function not implemented.');
}
/*

export const getServerSideProps = async (ctx: any) => {  

  const apiClient = setupAPIClient(ctx);

  const users = await apiClient.get('/listby/:id');
  

  return { 
      props: { 
          users: users.data
      } 
  }

  
}

/*function useParams(): { id: any; } {
  throw new Error('Function not implemented.');
}

*/