import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>GEA - Global Engineering Agency</title>
        <meta name="description" content="Quality Engineering & Real Estate Solutions in Rwanda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
