import styles from './planetInfoSection.module.scss'
import PlanetData from '../misc/planetData'
import type { PlanetCardData } from '../../types/planets'

interface PlanetInfoSectionProps {
  planet: PlanetCardData,
}

const PlanetInfoSection = ({ planet } : PlanetInfoSectionProps) => {
  return (
    <div className={styles.container}>
      <PlanetData planet={planet} isCard={false}/>
    </div>
  )
}

export default PlanetInfoSection;