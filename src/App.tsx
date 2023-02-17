import { Events } from '@/components/Events'
import { Hero } from '@/components/Hero'
import { EventsProvider } from '@/contexts/EventsContext'

export function App() {
  return (
    <EventsProvider>
      <Hero />
      <Events />
    </EventsProvider>
  )
}
