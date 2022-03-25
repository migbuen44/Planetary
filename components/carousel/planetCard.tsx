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
          <Image src={`${imageDirectory}/${name}.png`} layout="responsive" objectFit="contain" width={100} height={100}/>
      </div>
      <PlanetData planet={planet} isCard/>
    </div>
  )
}

export default PlanetCard;