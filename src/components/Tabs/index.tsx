import cx from 'classnames'
import { useState } from 'react'
import styles from './styles.module.scss'

type TabValue = 'list' | 'map'

interface Tab {
  label: string
  value: TabValue
}

const tabs: Tab[] = [
  { label: 'Lista', value: 'list' },
  { label: 'Mapa', value: 'map' },
]

export function Tabs() {
  const [activeTab, setActiveTab] = useState<TabValue>('list')

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <button
          type="button"
          onClick={() => setActiveTab(tab.value)}
          key={tab.value}
          className={cx(styles.tab, {
            [styles.active]: activeTab === tab.value,
          })}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
