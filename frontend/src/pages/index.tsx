import { useState, ChangeEvent, FormEvent} from 'react';
import Head from 'next/head';
import styles from '../../styles/home.module.scss';
import { toast } from 'react-toastify';

import { setupAPIClient } from '../services/api';

export default function Home() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  

  async function handleRegister(event: FormEvent) {
    event.preventDefault();

    if(name === '' || email === '' || numero === '' || cidade === ''){
      toast.warning("Preencher o formulário corretamente.")
      return;
    }

    const apiClient = setupAPIClient();

    await apiClient.post('/users', {
      name: name,
      email: email,
      numero: numero,
      cidade: cidade
    })

    toast.success("Usuário criado com sucesso!");

    setName('');
    setEmail('');
    setNumero('');
    setCidade('');

  }

  return (
    <>
    <Head>
      <title>Cadastro de usuário</title>
    </Head>
    <div className={styles.cadastro}>
      <h1>Cadastro de usuário</h1>
      <form onSubmit={handleRegister}>
        <input type="text" className={styles.input} placeholder="Digite o seu Nome"
        value={name}
        onChange={ (e) => setName(e.target.value)}
        />
        <input type="text" className={styles.input} placeholder="Digite o seu Email"
        value={email}
        onChange={ (e) => setEmail(e.target.value)}
        />
        <input type="text" className={styles.input} placeholder="Digite o seu Numero"
        value={numero}
        onChange={ (e) => setNumero(e.target.value)}
        />
        <input type="text" className={styles.input} placeholder="Digite a sua Cidade"
        value={cidade}
        onChange={ (e) => setCidade(e.target.value)}
        />
        <button className={styles.button} type="submit"> 
          <a>Cadastrar</a>
        </button>
      </form>

      <a className={styles.text}>Visualizar todos os usuários cadastrados</a>
    </div>
    </>
  )
}
