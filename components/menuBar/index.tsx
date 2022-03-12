import styles from './menuBar.module.scss'

interface MenuBarProps {
  closeMenuBar: Function,
}

const MenuBar = ({ closeMenuBar } : MenuBarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.exit_area} onClick={()=>closeMenuBar()}>TapOut</div>
      <div className={styles.menu_bar}>MenuBar</div>
    </div>
  )
}

export default MenuBar;