import styles from './carousel.module.scss'
import ReactCardCarousel from 'react-card-carousel'

interface CarouselProps {
  planetCardData: []
}

const Carousel = ({ planetCardData } : CarouselProps) => {
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