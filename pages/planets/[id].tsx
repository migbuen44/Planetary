import styles from '../../styles/Planet.module.scss';
import { getAllPlanetIds, getPlanetData, getSortedPlanetsData } from '../../lib/planets'
import Header from '../../components/header';
import { DefaultDeserializer } from 'v8';

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
  return {
    props: {
      planetData,
      menuBarData,
    }
  }
}

const Planet = ({ planetData, menuBarData } : any) => {
  const { id, contentHtml } = planetData;
  // console.log('planetData: ', planetData)
  const planetTitle = id.replace(id[0], id[0].toUpperCase());
  return (
    <div className={styles.container}>
      <Header menuBarData={menuBarData}/>
      <h2 className={styles.planet_title}>{planetTitle}</h2>
      <div className={styles.body_container} dangerouslySetInnerHTML={{__html: contentHtml}}/>
    </div>
  )
}

export default Planet;