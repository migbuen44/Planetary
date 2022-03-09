import type { NextPage, GetStaticProps } from 'next'
import styles from './carousel.module.scss'
import ReactCardCarousel from 'react-card-carousel'
import { getSortedPlanetCardData } from '../../lib/planets'

export const getStaticProps: GetStaticProps = async () => {
  const planetCardData = getSortedPlanetCardData();

  return {
    props: {
      planetCardData
    }
  }
}

interface CarouselProps {
  planetCardData: []
}

const Carousel: NextPage<CarouselProps> = ({ planetCardData }) => {
  return (
    <div className={styles.container}>
      {/* Carousel */}
      <ReactCardCarousel>
        <div className={styles.card}>First Card</div>
        <div className={styles.card}>Second Card</div>
        <div className={styles.card}>Third Card</div>
      </ReactCardCarousel>
    </div>
  )
}

export default Carousel;