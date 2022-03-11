import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import MenuBar from '../menuBar'

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(true);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Planetary</h1>
      <button className={styles.menu_button}>
        <FontAwesomeIcon icon={faBars} className={styles.bar_icon}/>
      </button>
      {menuIsOpen? <MenuBar /> : <></>}
    </div>
  )
}

export default Header;