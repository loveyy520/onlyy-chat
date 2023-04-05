import styles from './index.module.css'

export default function Header() {
  return (
    <div className={styles['app-header']}>
      <img
        src="/dog.png"
        className={styles.icon}
      />
      <h3 className={styles['app-title']}>Onlyy Bot</h3>
    </div>
  )
}
