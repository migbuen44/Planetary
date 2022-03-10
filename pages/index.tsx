import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Carousel from '../components/carousel';
import { getSortedPlanetCardData } from '../lib/planets'

export const getStaticProps: GetStaticProps = async () => {
  const planetCardData = getSortedPlanetCardData();

  return {
    props: {
      planetCardData
    }
  }
}

interface HomeProps {
  planetCardData: []
}

const Home: NextPage<HomeProps> = ({ planetCardData }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Planetary</title>
      </Head>
      <h1 className={styles.title}>Planetary</h1>
      {/* <div className={styles.carousel_container}>Carousel</div> */}
      <Carousel planetCardData={planetCardData}/>
    </div>
  )
}

export default Home
