import styles from './planetData.module.scss'
import type { PlanetCardData } from '../../types/planets'
import { convertCaretToHtml } from '../../lib/string';

interface PlanetInfoProps {
  planet: PlanetCardData,
  isCard: boolean,
}

const PlanetInfo = ({ planet, isCard } : PlanetInfoProps) => {
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
    <div>
      {isCard ? <div>{name}</div> : <></>}
      <div className={styles.planet_info}>
        <div>AU</div>
        <div>{AU}</div>
      </div>
      <div className={styles.planet_info}>
        <div>Surface Area</div>
        <div dangerouslySetInnerHTML={{__html: surface_areaHtml}}></div>
      </div>
      <div className={styles.planet_info}>
        <div>Volume</div>
        <div dangerouslySetInnerHTML={{__html: volumeHtml}}></div>
      </div>
      <div className={styles.planet_info}>
        <div>Mass</div>
        <div dangerouslySetInnerHTML={{__html: massHtml}}></div>
      </div>
    </div>
  )
}

export default PlanetInfo;