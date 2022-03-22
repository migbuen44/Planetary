import styles from '../../styles/Planet.module.scss';
import { getAllPlanetIds, getPlanetData, getSortedPlanetsData } from '../../lib/planets'
import Header from '../../components/header';
import PlanetCard from '../../components/carousel/planetCard';

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
  // console.log('cardData: ', cardData);
  const planetTitle = id.replace(id[0], id[0].toUpperCase());
  return (

    <div className={styles.container}>
      <Header menuBarData={menuBarData}/>
      <span>Hi, this is a math string 10<sup>4</sup></span>
      <div>+++++++++++</div>
      <h2 className={styles.planet_title}>{planetTitle}</h2>
      <PlanetCard planet={cardData} isCard={false}/>
      <div className={styles.body_container} dangerouslySetInnerHTML={{__html: contentHtml}}/>
    </div>
  )
}

export default Planet;