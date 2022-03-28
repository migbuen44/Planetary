import styles from '../../styles/Planet.module.scss';
import { getAllPlanetIds, getPlanetData, getSortedPlanetsData } from '../../lib/planets'
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
      <Header menuBarData={menuBarData}/>
      <div className={styles.planet_title}>{planetTitle}</div>
      <div className={styles.top_section_container}>
        <div className={styles.image_container}>
          <Image src={`${imageDirectory}/${id}.png`} layout="responsive" width={100} height={100} objectFit="contain" />
        </div>
        <PlanetInfoSection planet={cardData} />
      </div>
      <div className={styles.body_container} dangerouslySetInnerHTML={{__html: contentHtml}}/>
    </div>
  )
}

export default Planet;