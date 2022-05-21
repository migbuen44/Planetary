import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Carousel from '../components/carousel';
import { getSortedPlanetsData } from '../lib/planets'
import Header from '../components/header'

export const getStaticProps: GetStaticProps = async () => {
  const planetCardData = getSortedPlanetsData();
  const menuBarData = planetCardData.map(planet => planet.name);

  return {
    props: {
      planetCardData,
      menuBarData,
    }
  }
}

interface HomeProps {
  planetCardData: [],
  menuBarData: [],
}

const Home: NextPage<HomeProps> = ({ planetCardData, menuBarData }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Planetary</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header menuBarData={menuBarData}/>
      <Carousel planetCardData={planetCardData}/>
    </div>
  )
}

export default Home
