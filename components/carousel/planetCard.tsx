import styles from './carousel.module.scss'
import Image from 'next/image'
import type { PlanetCardData } from '../../types/planets'
import PlanetData from '../misc/planetData';

interface PlanetCardProps {
  planet: PlanetCardData,
}

const imageDirectory = '/images/planet_card_images'

const PlanetCard = ({ planet } : PlanetCardProps) => {
  const {
    name,
  } = planet;

  return(
    <div className={styles.card}>
      <div className={styles.image_container}>
        <div className={styles.image_wrapper}>
          <Image src={`${imageDirectory}/${name}.png`} layout="fill" objectFit="contain"/>
        </div>
      </div>
      <PlanetData planet={planet} isCard/>
    </div>
  )
}

export default PlanetCard;