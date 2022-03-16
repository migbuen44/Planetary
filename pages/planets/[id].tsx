import { getAllPlanetIds } from '../../lib/planets'

const Planet = ({params} : any) => {
  return (
    <div style={{color: 'black'}}>Planet - {params.id}</div>
  )
}

export const getStaticProps = ({ params } : any) => {
  console.log('params: ', params);
  return {
    props: {
      params
    }
  }
}

export const getStaticPaths = async () => {
  const paths = getAllPlanetIds();
  return {
    paths,
    fallback: false,
  }
}

export default Planet;