import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <footer className="bg-primary border-t border-gold/20 py-8">
        <div className="container-width text-center">
          <p className="text-gray-300">
            &copy; 2024 Elite Cuts Barbershop. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}