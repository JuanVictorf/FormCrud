
import styles from './styles.module.scss';
import Link from 'next/link';

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link target="_blank" href={`https://www.linkedin.com/in/juan-victor-00528a1ba/`}>
                    <img src="/linke.png" className={styles.img} />
                </Link>

            <nav className={styles.menuNav}>
            <Link target="_blank" href={`https://github.com/JuanVictorf`}>
                    <img src="/git.png" className={styles.img} />
                </Link>
            </nav>

            </div>
            
        </header>
    )
}