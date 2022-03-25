import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import MenuBar from '../menuBar'
import Link from 'next/link'

interface HeaderProps {
  menuBarData: [],
}

const Header = ({ menuBarData } : HeaderProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <Link href="/">
        <h1 className={styles.title}>Planetary</h1>
      </Link>
      <button className={styles.menu_button} onClick={()=>setMenuIsOpen(true)}>
        <FontAwesomeIcon icon={faBars} className={styles.bar_icon}/>
      </button>
      {menuIsOpen? <MenuBar menuBarData={menuBarData} closeMenuBar={()=>setMenuIsOpen(false)}/> : <></>}
    </div>
  )
}

export default Header;