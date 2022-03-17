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
      params
    }
  }
}

const Planet = ({params} : any) => {
  return (
    <div style={{color: 'black'}}>Planet - {params.id}</div>
  )
}

export default Planet;