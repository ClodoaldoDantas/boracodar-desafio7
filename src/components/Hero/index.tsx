import { Search } from '@/components/Search'

import illustration01 from '@/assets/illustration-01.svg'
import illustration02 from '@/assets/illustration-02.svg'
import styles from './styles.module.scss'

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <header className={styles.heroContent}>
          <strong>find your block</strong>
          <h1>
            Encontre os <span>melhores blocos</span> de carnaval de 2023
          </h1>
        </header>

        <Search />
      </div>

      <img src={illustration01} alt="" className={styles.heroImageOne} />
      <img src={illustration02} alt="" className={styles.heroImageTwo} />
    </section>
  )
}
