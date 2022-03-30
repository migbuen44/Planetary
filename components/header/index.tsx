import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import MenuBar from '../menuBar'
import MenuBarDeskstop from '../menuBarDesktop'
import Link from 'next/link'

interface HeaderProps {
  menuBarData: [],
}

const Header = ({ menuBarData } : HeaderProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const width = window.innerWidth; // change to screen width before deployment
    // console.log('screenWidth: ', screenWidth);
    if (width >= 1024) {
      setIsDesktop(true);
    }
  }, [])
  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.title_link}>
          <h1 className={styles.title}>Planetary</h1>
        </a>
      </Link>
      {isDesktop? <MenuBarDeskstop menuBarData={menuBarData}/> :
        <div className={styles.menu_bar_container}>
          <button className={styles.menu_button} onClick={()=>setMenuIsOpen(true)}>
            <FontAwesomeIcon icon={faBars} className={styles.bar_icon}/>
          </button>
          {menuIsOpen? <MenuBar menuBarData={menuBarData} closeMenuBar={()=>setMenuIsOpen(false)}/> : <></>}
        </div>
      }

    </div>
  )
}

export default Header;