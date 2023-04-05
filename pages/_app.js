import { message } from 'antd'
import { Layout } from '../components'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  const [messageApi, contextHolder] = message.useMessage()
  const warning = (msg) => {
    messageApi.open({
      type: 'warning',
      content: msg
    })
  }
  return (
    <Layout>
      {contextHolder}
      <Component {...pageProps} />
    </Layout>
  )
}
