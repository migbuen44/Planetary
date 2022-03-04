import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Carousel from '../components/carousel';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Planetary</title>
      </Head>
      <h1 className={styles.title}>Planetary</h1>
      {/* <div className={styles.carousel_container}>Carousel</div> */}
      <Carousel />
    </div>
  )
}

export default Home
