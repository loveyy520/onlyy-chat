import styles from './index.module.css'

export function ChatBubble({ content, order }) {
  return (
    <div
      className={order ? styles['chat-bubble'] : styles['chat-bubble-reverse']}
    >
      {content}
    </div>
  )
}
