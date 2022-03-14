import styles from './menuBar.module.scss'

interface MenuBarProps {
  closeMenuBar: Function,
  menuBarData: [],
}

const MenuBar = ({ closeMenuBar, menuBarData } : MenuBarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.exit_area} onClick={()=>closeMenuBar()}>TapOut</div>
      <div className={styles.menu_bar}>MenuBar</div>
    </div>
  )
}

export default MenuBar;