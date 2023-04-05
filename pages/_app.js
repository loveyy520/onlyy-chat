import { Layout } from '../components'
import '../styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      {contextHolder}
      <Component {...pageProps} />
    </Layout>
  )
}
