import Head from "next/head";
import { useState } from 'react'
import styles from './index.module.css'

import { SessionsContainer } from '../components'

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [messageInput, setMessageInput] = useState('')
  const [result, setResult] = useState('')
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
      setResult(data.result)
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

  function timer() {
    setConversations((prevConversations) => [
      ...prevConversations,
      {
        role: 'user',
        content: '你说123'
      }
    ])
    console.log('1:', conversations)
    setTimeout(() => {
      setConversations((prevConversations) => [
        ...prevConversations,
        {
          role: 'assistant',
          content: '123'
        }
      ])
    }, 2000)
  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link
          rel="icon"
          href="/dog.png"
        />
      </Head>

      <main className={styles.main}>
        <img
          src="/dog.png"
          className={styles.icon}
        />
        <h3 onClick={timer}>Onlyy Bot</h3>
        <SessionsContainer
          loading={loading}
          conversations={conversations}
        />
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="message"
            placeholder="Enter a question"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <input
            type="submit"
            value="Generate answer"
          />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  )
}
