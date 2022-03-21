import styles from './carousel.module.scss'
import type { PlanetCardData } from '../../types/planets'
import PlanetInfo from './planetInfo';

interface PlanetCardProps {
  planet: PlanetCardData,
  isCard: boolean,
}

const PlanetCard = ({ planet, isCard } : PlanetCardProps) => {
  const {
    name,
  } = planet;

  if(isCard) return(
    <div className={styles.card}>
      <PlanetInfo planet={planet} isCard/>
    </div>
  )

  return (
    <div className={styles.card_on_page}>
      <PlanetInfo planet={planet} isCard={false}/>
    </div>
  )
}

export default PlanetCard;