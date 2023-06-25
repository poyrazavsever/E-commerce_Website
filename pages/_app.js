import '@/styles/globals.css'
import Layout from '../layout/layout'

export default function App({ Component, pageProps }) {
  return(

    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  )
}
