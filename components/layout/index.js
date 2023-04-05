import Header from './header'
import styles from './index.module.css'

export function Layout({ children }) {
  return (
    <div className={styles['layout-panel']}>
      <Header />
      {children}
    </div>
  )
}
