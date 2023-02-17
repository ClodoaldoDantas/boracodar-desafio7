import { EventsContext } from '@/contexts/EventsContext'
import { useContext } from 'react'

export function useEvents() {
  const context = useContext(EventsContext)
  return context
}
