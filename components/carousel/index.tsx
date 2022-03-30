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
      <ReactCardCarousel disable_box_shadow>
        {planetCardData.map((planet, idx) =>
          <PlanetCard planet={planet} key={`planet-${idx}`}/>
        )}
      </ReactCardCarousel>
    </div>
  )
}

export default Carousel;