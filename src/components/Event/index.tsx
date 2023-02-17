import { Event as EventState } from '@/contexts/EventsContext'
import locationIcon from '@/assets/location.svg'
import styles from './styles.module.scss'

export function Event({ data }: { data: EventState }) {
  return (
    <article className={styles.event}>
      <figure className={styles.eventBanner}>
        <img src={`/images/photo-${data.id}.png`} alt={data.name} />
      </figure>

      <div className={styles.eventContent}>
        <h3>{data.name}</h3>
        <p>{data.description}</p>

        <div className={styles.eventLocation}>
          <img src={locationIcon} alt="" />
          <span>
            {data.location.city} - {data.location.uf}
          </span>
        </div>
      </div>
    </article>
  )
}
