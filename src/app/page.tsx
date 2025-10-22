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
      <footer className="relative bg-gradient-to-b from-primary to-black border-t border-gold/30 py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent"></div>
        <div className="container-width text-center relative z-10">
          <div className="mb-6">
            <div className="inline-flex items-center space-x-3 mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold"></div>
              <span className="text-2xl font-bold text-gradient">Elite Cuts</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold"></div>
            </div>
            <p className="text-gray-400 text-sm max-w-md mx-auto">
              Crafting excellence in grooming since 2008
            </p>
          </div>
          <p className="text-gray-300 mb-2">
            &copy; 2024 Elite Cuts Barbershop. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Designed with passion for excellence
          </p>
        </div>
      </footer>
    </>
  )
}