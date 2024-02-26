import styles from '@/app/page.module.scss'
import { Footer, Header } from '@/app/index'

export default function Home() {
  return (
    <main className={styles.mainWindow}>
      <Header />
      <Footer />
    </main>
  )
}
