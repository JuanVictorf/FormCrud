import { useState, ChangeEvent, FormEvent, useEffect} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Header } from '../../components/Header';
import styles from '../../../styles/home.module.scss';
import { toast } from 'react-toastify';
import 'typeface-roboto';
import { useRouter } from 'next/router';





import { setupAPIClient } from '../../services/api';
//import { useParams } from 'react-router-dom';

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
  
  const apiClient = setupAPIClient();
 

  const [data, setData] = useState({})


  useEffect(() => {
    const { id } = router.query // obtém o valor do parâmetro da URL
    fetch(`/listby/${id}`)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => console.error(error))
  }, [])
  

  //console.log(id); // Buscando o ID - está trazendo

  
    
    //const usuario = await apiClient.get.findUnique({
      //where: { id }
    //})
    //setEmail(usuario.email)
    //setName(usuario.nome)
  

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    const apiClient = setupAPIClient();

    /*await apiClient.get('/listby/:id', {
      name,
      email
    })
    */

    

    //toast.success("Usuário atualizado com sucesso!");

    /*setName('');
    setEmail('');
    setNumero('');
    setCidade('');*/

    
  }


  return (
    <>
    <Head>
      <title>Editar Cadastro de usuário</title>
    </Head>
    <Header/>
    <div className={styles.cadastro}>
      <h1>Editar Cadastro de usuário</h1>
      <form onSubmit={handleRegister}>
        <input type="text" className={styles.input} placeholder="Nome"
        />
        <input type="text" className={styles.input} placeholder="Email"
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

/*function useParams(): { id: any; } {
  throw new Error('Function not implemented.');
}

*/