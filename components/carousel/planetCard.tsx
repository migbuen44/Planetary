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

  const fileEndPnt = name.toLowerCase();

  const imageSrc = `${imageDirectory}/${fileEndPnt}.png`

  return(
    <div className={styles.card}>
      <div className={styles.image_section}>
        <div className={styles.image_container}>
            <Image src={imageSrc} layout="responsive" objectFit="contain" width={100} height={100} alt="planet"/>
        </div>
      </div>
      <div className={styles.planet_name}>{name}</div>
      <div className={styles.planet_data_container}>
        <div className={styles.planet_data_wrapper}>
          <div className={styles.planet_name_nested}>{name}</div>
          <PlanetData planet={planet}/>
        </div>
      </div>
    </div>
  )
}

export default PlanetCard;