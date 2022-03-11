import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Carousel from '../components/carousel';
import { getSortedPlanetCardData } from '../lib/planets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

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
      <div className={styles.header}>
        <h1 className={styles.title}>Planetary</h1>
        <button className={styles.menu_button}>
          <FontAwesomeIcon icon={faBars} className={styles.bar_icon}/>
        </button>
      </div>
      {/* <div className={styles.carousel_container}>Carousel</div> */}
      <Carousel planetCardData={planetCardData}/>
    </div>
  )
}

export default Home
