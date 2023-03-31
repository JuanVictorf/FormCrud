import { useState, ChangeEvent, FormEvent, useEffect} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Header } from '../components/Header/';
import styles from '../../styles/home.module.scss';
import { toast } from 'react-toastify';
import 'typeface-roboto';




import { setupAPIClient } from '../services/api';


export default function Home() {
  


  //const { id } = useParams();



  /*const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');*/
  

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    const apiClient = setupAPIClient();

    /*await apiClient.get('/users/:id', {
      name,
      email
    })
    */

    toast.success("Usuário atualizado com sucesso!");

    /*setName('');
    setEmail('');
    setNumero('');
    setCidade('');*/

  }
  
  /*function handleEdit(id: number) {
    history.push(`/edit/${id}`);
  }
  */



  // linha 42 editada
  
  return (
    <>
    <Head>
      <title>Editar Cadastro de usuário</title>
    </Head>
    <Header/>
    <div className={styles.cadastro}>
      <h1>Editar Cadastro de usuário</h1>
      <form onSubmit={handleRegister}>
        <input type="text" className={styles.input} placeholder="Digite o seu Nome"
        />
        <input type="text" className={styles.input} placeholder="Digite o seu Email"
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

function useParams(): { id: any; } {
  throw new Error('Function not implemented.');
}

*/