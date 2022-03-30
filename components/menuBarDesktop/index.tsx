import styles from './menuBarDesktop.module.scss';
import Link from 'next/link'

interface MenuBarDesktopProps {
  menuBarData: string[],
}

const MenuBarDesktop = ({ menuBarData } : MenuBarDesktopProps) => {
  return (
    <div className={styles.container}>
      {menuBarData.map(planet =>
        <Link href={`/planets/${planet.toLowerCase()}`} key={planet} >
          <a className={styles.planet_name}>
            <div>{planet}</div>
          </a>
        </Link>
      )}
    </div>
  )
}

export default MenuBarDesktop;