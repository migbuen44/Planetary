import styles from './menuBar.module.scss'
import Link from 'next/link'

interface MenuBarProps {
  closeMenuBar: Function,
  menuBarData: string[],
}

const MenuBar = ({ closeMenuBar, menuBarData } : MenuBarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.exit_area} onClick={()=>closeMenuBar()}>TapOut</div>
      <div className={styles.menu_bar}>
        <div className={styles.menu_bar_title}>
          <h2>All Planets</h2>
        </div>
        <div className={styles.planet_names_container}>
          {menuBarData.map(planet =>
            (<Link href={`/planets/${planet.toLowerCase()}`} key={planet}>
              <div className={styles.planet_name} onClick={()=>closeMenuBar()}>
                <div>{planet}</div>
              </div>
            </Link>)
          )}
        </div>
      </div>
    </div>
  )
}

export default MenuBar;