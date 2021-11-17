import styles from '../styles/Home.module.css'
import Head from 'next/head'
import customStyles from '../styles/main.module.scss'

const Layout = ( {children} ) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Srinivas</title>
                <meta name="keywords" content="nextjs , mailmodo , first project" />
            </Head>
            <header className={styles.header}>
            <center>
                <h2>Srinivas Vasamsetti</h2>
                <a href="/"><button className={customStyles.button_home}>Home</button></a>
                <a href='/about'><button className={customStyles.button_about}>About</button></a>
            </center>

            </header>
            <main className={styles.main}>
                {children}
            </main>
            <footer className={styles.footer}>
                &copy; srinivas
            </footer>
        </div>
    )
}

export default Layout
