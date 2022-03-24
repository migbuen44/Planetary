import styles from './carousel.module.scss'
import Image from 'next/image'
import type { PlanetCardData } from '../../types/planets'
import PlanetInfo from './planetInfo';

interface PlanetCardProps {
  planet: PlanetCardData,
  isCard: boolean,
}

const imageDirectory = '/images/planet_card_images'

const PlanetCard = ({ planet, isCard } : PlanetCardProps) => {
  const {
    name,
  } = planet;

  if(isCard) return( // returns component with styles for home page component card
    <div className={styles.card}>
      <div className={styles.image_container}>
        <div className={styles.image_wrapper}>
          <Image src={`${imageDirectory}/${name}.png`} layout="fill" objectFit="contain"/>
        </div>
      </div>
      <PlanetInfo planet={planet} isCard/>
    </div>
  )

  return ( // returns component with styles for dynamc route page component card info section
    <div className={styles.card_on_page}>
      <PlanetInfo planet={planet} isCard={false}/>
    </div>
  )
}

export default PlanetCard;