import { useEffect, useRef } from 'react'
import { SessionRecord } from '../session-record'
import styles from './index.module.css'

const userAvatar = 'https://assets.onlyy.vip/icons/dst/Willow.png'
const botAvatar = 'https://assets.onlyy.vip/icons/dst/Wendy.png'

export function SessionsContainer({ conversations, loading }) {
  const greetings = [
    {
      role: 'assistant',
      content:
        '你好鸭，喵~ 我是Onlyy Bot，你的专属AI小助手喵，你也可以叫我Onlyy！有什么我可以帮忙的嘛？'
    }
  ]
  const sessions = [...greetings, ...conversations]
  const decorations = ['🦋', '🍒', '🍭', '🍷']
  const decorationLength = decorations.length
  const sessionRecordRef = useRef(null)
  const loadingRef = useRef(null)
  useEffect(() => {
    if (loading) {
      loadingRef.current.scrollIntoView()
    } else {
      sessionRecordRef.current.scrollIntoView()
    }
  })

  return (
    <div className={styles['sessions-container']}>
      {sessions.map((conversation, i) => (
        <div
          key={conversation.role + i}
          ref={sessionRecordRef}
        >
          <SessionRecord
            content={conversation.content}
            order={Number(conversation.role === 'assistant')}
            avatar={conversation.role === 'assistant' ? botAvatar : userAvatar}
            decoration={decorations[i % decorationLength]}
            shouldTypeIt={
              i === sessions.length - 1 && conversation.role === 'assistant'
            }
          />
        </div>
      ))}
      {loading && (
        <div
          key="loading"
          ref={loadingRef}
        >
          <SessionRecord
            content="(喵~让我想想...)"
            order={1}
            avatar={botAvatar}
            decoration="🕸"
            shouldTypeIt={true}
          />
        </div>
      )}
    </div>
  )
}
