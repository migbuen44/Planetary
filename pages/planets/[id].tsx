import { getAllPlanetIds, getPlanetData } from '../../lib/planets'

export const getStaticPaths = async () => {
  const paths = getAllPlanetIds();
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params } : any) => {
  const planetData = await getPlanetData(params.id);
  return {
    props: {
      planetData,
    }
  }
}

const Planet = ({ planetData } : any) => {
  const { id, contentHtml } = planetData;
  // console.log('planetData: ', planetData)
  return (
    <div>
      <div style={{color: 'black'}}>Planet - {id}</div>
      <div style={{color: 'black'}} dangerouslySetInnerHTML={{__html: contentHtml}}/>
    </div>
  )
}

export default Planet;