import TypeIt from 'typeit-react'
import cn from 'classnames'
import { ChatBubble, CherryMarkdown } from '../../components'
import styles from './index.module.css'

export function SessionRecord({
  avatar,
  content,
  order,
  decoration,
  shouldTypeIt,
  id
}) {
  return (
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
        content={
          shouldTypeIt ? (
            <TypeIt speed={60}>
              {
                <CherryMarkdown
                  id={id}
                  content={content}
                />
              }
            </TypeIt>
          ) : (
            <CherryMarkdown
              id={id}
              content={content}
            />
          )
        }
        order={order}
        decoration={decoration}
      />
    </div>
  )
}
