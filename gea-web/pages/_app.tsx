import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>GEA - Global Engineering Agency</title>
        <meta name="description" content="Quality Engineering & Real Estate Solutions in Rwanda" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
