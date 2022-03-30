import styles from './planetData.module.scss'
import type { PlanetCardData } from '../../types/planets'
import { convertCaretToHtml } from '../../lib/string';

interface PlanetInfoProps {
  planet: PlanetCardData,
}

const PlanetInfo = ({ planet } : PlanetInfoProps) => {
  const {
    name,
    AU,
    surface_area,
    volume,
    mass,
  } = planet;

  const surface_areaHtml = convertCaretToHtml(surface_area);
  const volumeHtml = convertCaretToHtml(volume);
  const massHtml = convertCaretToHtml(mass);


  return (
    <div className={styles.container}>
      <div className={styles.planet_info}>
        <div className={styles.info_label}>AU</div>
        <div>{AU}</div>
      </div>
      <div className={styles.planet_info}>
        <div className={styles.info_label}>Surface Area</div>
        <div dangerouslySetInnerHTML={{__html: surface_areaHtml}}></div>
      </div>
      <div className={styles.planet_info}>
        <div className={styles.info_label}>Volume</div>
        <div dangerouslySetInnerHTML={{__html: volumeHtml}}></div>
      </div>
      <div className={styles.planet_info}>
        <div className={styles.info_label}>Mass</div>
        <div dangerouslySetInnerHTML={{__html: massHtml}}></div>
      </div>
    </div>
  )
}

export default PlanetInfo;