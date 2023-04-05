import Head from "next/head";
import { useState } from 'react'
import styles from './index.module.css'

import { SessionsContainer, NewMessage } from '../components'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [messageInput, setMessageInput] = useState('')
  const [conversations, setConversations] = useState(() => [])
  async function onSubmit(event) {
    event.preventDefault()
    if (!messageInput) return
    const msg = messageInput
    setMessageInput('')
    try {
      setConversations((prevConversations) => [
        ...prevConversations,
        {
          role: 'user',
          content: msg
        }
      ])
      setLoading(true)
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([
          ...conversations,
          {
            role: 'user',
            content: msg
          }
        ])
      })

      const data = await response.json()
      if (response.status !== 200) {
        throw data.error || new Error(`请求失败 ${response.status}`)
      }

      setLoading(false)
      setConversations((prevConversations) => {
        return [
          ...prevConversations,
          {
            role: 'assistant',
            content: data.result
          }
        ]
      })
    } catch (error) {
      // Consider implementing your own error handling logic here
      console.error(error)
      alert(error.message)
    }
  }

  return (
    <div className={styles['page-container']}>
      <Head>
        <title>OnlyyChat | 猫猫</title>
        <link
          rel="icon"
          href="/dog.png"
        />
      </Head>

      <SessionsContainer
        loading={loading}
        conversations={conversations}
      />
      <NewMessage
        value={messageInput}
        setValue={setMessageInput}
        onSend={onSubmit}
      />
    </div>
  )
}
