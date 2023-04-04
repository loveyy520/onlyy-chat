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

  return (
    <div className={styles['sessions-container']}>
      {sessions.map((conversation, i) => (
        <SessionRecord
          key={conversation.role + i}
          content={conversation.content}
          order={Number(conversation.role === 'assistant')}
          avatar={conversation.role === 'assistant' ? botAvatar : userAvatar}
          shouldTypeIt={
            i === sessions.length - 1 && conversation.role === 'assistant'
          }
        />
      ))}
      {loading && (
        <SessionRecord
          key="loading"
          content="(喵~让我想想...)"
          order={1}
          avatar={botAvatar}
          shouldTypeIt={true}
        />
      )}
    </div>
  )
}
