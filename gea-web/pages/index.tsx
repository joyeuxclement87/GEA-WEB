import TopBar from '../components/header/TopBar'
import Navbar from '../components/header/Navbar'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>GEA - Global Engineering Agency</title>
        <meta name="description" content="Global Engineering Agency - Engineering & Real Estate Solutions in Rwanda" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <Navbar />
        <main className="flex-grow">
          {/* Your page content will go here */}
          <div className="container mx-auto px-4 py-8">
            <h1>Welcome to Global Engineering Agency</h1>
          </div>
        </main>
      </div>
    </>
  )
}
