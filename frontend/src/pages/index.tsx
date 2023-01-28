import { useState } from 'react';
import Head from 'next/head';
import styles from '../../styles/home.module.scss';


export default function Home() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  

  return (
    <>
    <Head>
      <title>Cadastro de usuário</title>
    </Head>
    <div className={styles.cadastro}>
      <h1>Cadastro de usuário</h1>
      <form>
        <input type="text" className={styles.input} placeholder="Digite o seu Nome"/>
        <input type="text" className={styles.input} placeholder="Digite o seu Email"/>
        <input type="text" className={styles.input} placeholder="Digite o seu Numero"/>
        <input type="text" className={styles.input} placeholder="Digite a sua Cidade"/>
        <button className={styles.button} type="submit"> 
          <a>Cadastrar</a>
        </button>
      </form>

      <a className={styles.text}>Visualizar todos os usuários cadastrados</a>
    </div>
    </>
  )
}
