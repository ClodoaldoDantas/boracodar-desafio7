import { api } from '@/lib/api'
import { createContext, ReactNode, useEffect, useState } from 'react'

export interface Event {
  id: number
  name: string
  description: string
  location: {
    city: string
    uf: string
  }
}

interface EventsContextData {
  events: Event[]
  searchEvents: (name: string, city: string) => Promise<void>
}

interface EventsProviderProps {
  children: ReactNode
}

export const EventsContext = createContext({} as EventsContextData)

export function EventsProvider({ children }: EventsProviderProps) {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    api
      .get('events')
      .then((response) => setEvents(response.data))
      .catch((err) => console.error(err))
  }, [])

  async function searchEvents(name: string, city: string) {
    const params = new URLSearchParams()

    if (name) params.append('name_like', name)
    if (city) params.append('location.city', city)

    try {
      const response = await api.get('events', { params })
      setEvents(response.data)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <EventsContext.Provider value={{ events, searchEvents }}>
      {children}
    </EventsContext.Provider>
  )
}
