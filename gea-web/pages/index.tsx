import Hero from '../components/hero/Hero'
import Stats from '../components/home/Stats'
import Services from '../components/services/Services'
import Testimonials from '../components/home/Testimonials'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>GEA - Global Engineering Agency</title>
        <meta name="description" content="Global Engineering Agency - Engineering & Real Estate Solutions in Rwanda" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Hero />
        <Stats />
        <Services />
        <Testimonials />
        <main className="flex-grow">
          {/* Your page content will go here */}
          <div className="container mx-auto px-4 py-8">
            <h1>Welcome to Global Engineering Agency</h1>
          </div>
        </main>
        <section className="py-20 bg-gradient-to-br from-blue-dark to-blue-light text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white px-8 py-3 rounded-full hover:bg-primary-dark transition-all duration-300">
                Request a Quote
              </button>
              <button className="border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-blue-dark transition-all duration-300">
                Explore Services
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
