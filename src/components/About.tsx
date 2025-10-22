import Image from 'next/image'
import { Award, Users, Clock, Star } from 'lucide-react'

const barbers = [
  {
    name: 'Marcus Johnson',
    title: 'Master Barber & Owner',
    experience: '15 years',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    specialties: ['Classic Cuts', 'Hot Towel Shaves', 'Beard Styling'],
    bio: 'Marcus founded Elite Cuts with a passion for traditional barbering techniques and modern styling.'
  },
  {
    name: 'David Rodriguez',
    title: 'Senior Barber',
    experience: '8 years',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    specialties: ['Fades', 'Modern Cuts', 'Beard Trims'],
    bio: 'David specializes in contemporary styles and precision fades, bringing fresh creativity to every cut.'
  },
  {
    name: 'Anthony Chen',
    title: 'Barber',
    experience: '5 years',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    specialties: ['Scissor Cuts', 'Styling', 'Consultations'],
    bio: 'Anthony combines technical skill with artistic vision to create personalized looks for each client.'
  }
]

const stats = [
  { icon: Award, number: '15+', label: 'Years in Business' },
  { icon: Users, number: '5000+', label: 'Happy Clients' },
  { icon: Clock, number: '50k+', label: 'Hours of Experience' },
  { icon: Star, number: '4.9', label: 'Average Rating' }
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-900 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase px-4 py-2 bg-gold/10 rounded-full border border-gold/30">
              Our Story
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            About <span className="text-gradient">Elite Cuts</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We&apos;re more than just a barbershop - we&apos;re craftsmen dedicated to the art of grooming, 
            combining time-honored traditions with modern techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Our Story</h3>
            <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
              <p className="p-4 bg-white/5 rounded-lg border-l-4 border-gold">
                Founded in 2008, Elite Cuts began as a vision to create a space where traditional 
                barbering meets contemporary style. Our founder, Marcus Johnson, trained under 
                master barbers in New York before bringing his expertise to our community.
              </p>
              <p className="p-4 bg-white/5 rounded-lg border-l-4 border-gold">
                We believe that a great haircut is more than just a service - it&apos;s an experience 
                that builds confidence and leaves you feeling your absolute best. Every client 
                who walks through our doors receives personalized attention and expert craftsmanship.
              </p>
              <p className="p-4 bg-white/5 rounded-lg border-l-4 border-gold">
                Our commitment to excellence has made us the go-to destination for discerning 
                gentlemen who appreciate quality, attention to detail, and exceptional service.
              </p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-gold opacity-20 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
            <Image
              src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
              alt="Elite Cuts barbershop interior"
              width={600}
              height={400}
              className="relative rounded-2xl shadow-gold-lg transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent rounded-2xl"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="group text-center p-6 bg-white/5 rounded-2xl border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:scale-105 hover:shadow-gold">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>

        <div>
          <h3 className="text-4xl font-bold mb-12 text-center text-white">Meet Our <span className="text-gradient">Team</span></h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {barbers.map((barber, index) => (
              <div key={index} className="group relative bg-gradient-to-br from-primary to-gray-900 border border-gold/20 rounded-2xl p-6 text-center hover:border-gold/50 transition-all duration-500 hover:scale-105 hover:shadow-gold-lg">
                <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-gold rounded-full opacity-0 group-hover:opacity-50 blur-lg transition-opacity duration-300"></div>
                    <Image
                      src={barber.image}
                      alt={barber.name}
                      fill
                      className="rounded-full object-cover border-4 border-gold/30 group-hover:border-gold transition-all duration-300 relative z-10"
                    />
                  </div>
                  
                  <h4 className="text-2xl font-semibold mb-2 text-white group-hover:text-gold transition-colors duration-300">{barber.name}</h4>
                  <p className="text-gold-light font-semibold mb-2">{barber.title}</p>
                  <p className="text-gray-400 mb-4 text-sm bg-gold/10 inline-block px-3 py-1 rounded-full">{barber.experience} experience</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-400 mb-3 font-semibold">Specialties:</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {barber.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-gradient-gold text-primary px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {barber.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}