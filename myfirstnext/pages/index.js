import Image from 'next/image'
import styles from '../styles/Home.module.css'
import customStyles from '../styles/main.module.scss'

export default function Home() {
  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 100}`
  }

  return (
    <div className={styles.container}>
      <h1 className={customStyles.h1}>Srinivas Vasamsetti</h1>
    </div>
  )
}
