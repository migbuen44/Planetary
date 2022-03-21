import styles from './carousel.module.scss'
import type { PlanetCardData } from '../../types/planets'

interface PlanetInfoProps {
  planet: PlanetCardData,
  isCard: boolean,
}

const PlanetInfo = ({ planet, isCard } : PlanetInfoProps) => {
  const {
    name,
    AU,
    surface_area,
    volume,
    mass,
  } = planet;
  return (
    <div>
      {isCard ? <div>{name}</div> : <></>}
      <div>{AU}</div>
      <div>{surface_area}</div>
      <div>{volume}</div>
      <div>{mass}</div>
    </div>
  )
}

export default PlanetInfo;