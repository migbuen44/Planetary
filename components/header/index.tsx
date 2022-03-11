import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Planetary</h1>
      <button className={styles.menu_button}>
        <FontAwesomeIcon icon={faBars} className={styles.bar_icon}/>
      </button>
    </div>
  )
}

export default Header;