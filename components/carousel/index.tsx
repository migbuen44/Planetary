import type { NextPage } from 'next'
import styles from './carousel.module.scss'
import ReactCardCarousel from 'react-card-carousel'

const Carousel: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* Carousel */}
      <ReactCardCarousel className={styles.carousel}>
        <div className={styles.card}>First Card</div>
        <div className={styles.card}>Second Card</div>
        <div className={styles.card}>Third Card</div>
      </ReactCardCarousel>
    </div>
  )
}

export default Carousel;