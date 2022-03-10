import type { NextPage } from 'next'
import styles from './carousel.module.scss'
import type { PlanetCardData } from '../../types/planets'

interface PlanetCardProps {
  planet: PlanetCardData,
}

const PlanetCard: NextPage<PlanetCardProps> = ({ planet }) => {
  const {
    name,
    AU,
    surface_area,
    volume,
    mass,
  } = planet;

  return(
    <div className={styles.card}>
      <div>{name}</div>
      <div>{AU}</div>
      <div>{surface_area}</div>
      <div>{volume}</div>
      <div>{mass}</div>
    </div>
  )
}

export default PlanetCard;