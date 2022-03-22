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
      <div className={styles.planet_info}>
        <div>AU</div>
        <div>{AU}</div>
      </div>
      <div className={styles.planet_info}>
        <div>Surface Area</div>
        <div>{surface_area}</div>
      </div>
      <div className={styles.planet_info}>
        <div>Volume</div>
        <div>{volume}</div>
      </div>
      <div className={styles.planet_info}>
        <div>Mass</div>
        <div>{mass}</div>
      </div>
    </div>
  )
}

export default PlanetInfo;