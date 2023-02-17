import { FormEvent, useState } from 'react'
import { useEvents } from '@/hooks/useEvents'

import searchIcon from '@/assets/search.svg'
import locationIcon from '@/assets/location.svg'
import styles from './styles.module.scss'

const cities = [
  'Curitiba',
  'Florianópolis',
  'Porto Alegre',
  'Rio de Janeiro',
  'Salvador',
  'São Paulo',
]

export function Search() {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')

  const { searchEvents } = useEvents()

  function handleSearch(event: FormEvent) {
    event.preventDefault()
    searchEvents(name, city)
  }

  return (
    <form onSubmit={handleSearch} className={styles.searchForm}>
      <div className={styles.searchInput}>
        <img src={searchIcon} alt="" />
        <input
          type="text"
          placeholder="Pesquise por nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles.searchInput}>
        <img src={locationIcon} alt="" />
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Selecione uma cidade</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className={styles.searchButton}>
        Buscar Agora
      </button>
    </form>
  )
}
