import styles from '../../styles/Planet.module.scss';
import { getAllPlanetIds, getPlanetData, getSortedPlanetsData } from '../../lib/planets'
import Head from 'next/head'
import Header from '../../components/header';
import PlanetInfoSection from '../../components/planetInfoSection'
import Image from 'next/image'

const imageDirectory = '/images/planet_card_images';

export const getStaticPaths = async () => {
  const paths = getAllPlanetIds();
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params } : any) => {
  const planetData = await getPlanetData(params.id);
  const sortedPlanetsData = getSortedPlanetsData();
  const menuBarData = sortedPlanetsData.map(data => data.name);
  const cardData = sortedPlanetsData.find(data => {
    return data.name.toLowerCase() === params.id.toLowerCase();
  });
  return {
    props: {
      planetData,
      menuBarData,
      cardData,
    }
  }
}

const Planet = ({ planetData, menuBarData, cardData } : any) => {
  const { id, contentHtml } = planetData;
  const planetTitle = id.replace(id[0], id[0].toUpperCase());
  return (
    <div className={styles.container}>
      <Head>
        <title>Planetary</title>
        <link rel="icon" href="/icon.png" />
      </Head>
      <Header menuBarData={menuBarData}/>
      <div className={styles.planet_title}>{planetTitle}</div>
      <div className={styles.top_section_container}>
        <div className={styles.image_container}>
          <Image src={`${imageDirectory}/${id}.png`} layout="responsive" width={100} height={100} objectFit="contain" />
        </div>
        <PlanetInfoSection planet={cardData} />
      </div>
      <div className={styles.body_container}>
        <div className={styles.body_wrapper} dangerouslySetInnerHTML={{__html: contentHtml}}/>
      </div>
    </div>
  )
}

export default Planet;