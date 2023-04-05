import cn from 'classnames'
import styles from './index.module.css'

export function ChatBubble({ content, order, decoration }) {
  //   const randomIndex = Math.floor(Math.random(0, 4) * decorations.length)

  return (
    <>
      <div className={styles['chat-bubble-wrapper']}>
        <div
          className={cn({
            [styles['triangle-left']]: order,
            [styles['triangle-right']]: !order
          })}
        ></div>
        <div
          className={cn({
            [styles['chat-bubble']]: order,
            [styles['chat-bubble-reverse']]: !order
          })}
        >
          {content}
        </div>
      </div>
      <div className={styles['decoration-wrapper']}>
        {!!order && (
          <span className={styles['bubble-decoration']}>{decoration}</span>
        )}
      </div>
    </>
  )
}
