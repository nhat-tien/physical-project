import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
  <>
  <Head>
        <title>Physic project</title>
        <meta name="description" content="Project cua sinh vien" />
        <link rel="icon" href="/favicon.ico" />
  </Head> 
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
