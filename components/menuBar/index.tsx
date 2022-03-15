import styles from './menuBar.module.scss'

interface MenuBarProps {
  closeMenuBar: Function,
  menuBarData: [],
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
            <div className={styles.planet_name} key={planet}>
              <div>{planet}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MenuBar;