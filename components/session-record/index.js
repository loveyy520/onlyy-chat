import { forwardedRef } from 'react'
import TypeIt from 'typeit-react'
import cn from 'classnames'
import { ChatBubble } from '../chat-bubble'
import styles from './index.module.css'

export const SessionRecord = ({
  avatar,
  content,
  order,
  decoration,
  shouldTypeIt
}) => (
  <div
    className={cn({
      [styles['session-record']]: order,
      [styles['session-record-reverse']]: !order
    })}
  >
    <img
      className={styles.avatar}
      src={avatar}
      alt="暂无图片"
    />
    <ChatBubble
      content={shouldTypeIt ? <TypeIt speed={60}>{content}</TypeIt> : content}
      order={order}
      decoration={decoration}
    />
  </div>
)
