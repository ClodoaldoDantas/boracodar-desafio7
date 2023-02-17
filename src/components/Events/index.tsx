import { Tabs } from '@/components/Tabs'
import { Event } from '@/components/Event'
import { useEvents } from '@/hooks/useEvents'
import styles from './styles.module.scss'

export function Events() {
  const { events } = useEvents()

  return (
    <main className={styles.eventsContainer}>
      <header className={styles.eventsHeader}>
        <h2>Blocos recomendados</h2>

        <Tabs />
      </header>

      <section className={styles.eventsGrid}>
        {events.map((event) => (
          <Event key={event.id} data={event} />
        ))}
      </section>
    </main>
  )
}
