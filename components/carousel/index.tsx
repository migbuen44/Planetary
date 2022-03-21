import styles from './carousel.module.scss'
import ReactCardCarousel from 'react-card-carousel'
import PlanetCard from './planetCard'

interface CarouselProps {
  planetCardData: []
}

const Carousel = ({ planetCardData } : CarouselProps) => {
  return (
    <div className={styles.container}>
      {/* Carousel */}
      <ReactCardCarousel>
        {planetCardData.map((planet, idx) =>
          <PlanetCard planet={planet} key={`planet-${idx}`} isCard/>
        )}
      </ReactCardCarousel>
    </div>
  )
}

export default Carousel;