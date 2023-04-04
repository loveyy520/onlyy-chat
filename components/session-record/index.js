import TypeIt from 'typeit-react'
import { ChatBubble } from '../chat-bubble'
import styles from './index.module.css'

export function SessionRecord({ avatar, content, order, shouldTypeIt }) {
  return (
    <div
      className={
        order ? styles['session-record'] : styles['session-record-reverse']
      }
    >
      <img
        className={styles.avatar}
        src={avatar}
        alt="暂无图片"
      />
      <ChatBubble
        content={shouldTypeIt ? <TypeIt speed={60}>{content}</TypeIt> : content}
        order={order}
      />
    </div>
  )
}
