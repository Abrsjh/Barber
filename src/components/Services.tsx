import { Scissors, Zap, Sparkles, Crown } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Premium Haircut',
    description: 'Precision cuts tailored to your style and face shape',
    price: '$45',
    duration: '45 min',
    features: ['Consultation', 'Wash & Style', 'Hot Towel']
  },
  {
    icon: Zap,
    title: 'Traditional Shave',
    description: 'Classic hot towel shave with premium products',
    price: '$35',
    duration: '30 min',
    features: ['Hot Towel', 'Pre-shave Oil', 'Aftershave']
  },
  {
    icon: Crown,
    title: 'The Royal Treatment',
    description: 'Complete grooming experience with haircut and shave',
    price: '$70',
    duration: '75 min',
    features: ['Haircut', 'Hot Towel Shave', 'Beard Trim', 'Styling']
  },
  {
    icon: Sparkles,
    title: 'Beard Grooming',
    description: 'Professional beard trim and styling',
    price: '$25',
    duration: '20 min',
    features: ['Trim', 'Shape', 'Beard Oil', 'Styling']
  }
]

export default function Services() {
  return (
    <section id="services" className="section-padding bg-gray-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase px-4 py-2 bg-gold/10 rounded-full border border-gold/30">
              Premium Services
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional grooming services crafted with precision and care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-primary to-gray-900 border border-gold/20 rounded-2xl p-8 hover:border-gold/60 transition-all duration-500 hover:scale-105 hover:shadow-gold-lg"
              >
                <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-gold rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-gold">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-gold/20">
                    <span className="text-3xl font-bold text-gradient">
                      {service.price}
                    </span>
                    <span className="text-gray-400 text-sm bg-gold/10 px-3 py-1 rounded-full">
                      {service.duration}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 group/item">
                        <div className="w-2 h-2 bg-gradient-gold rounded-full mr-3 group-hover/item:scale-125 transition-transform duration-300"></div>
                        <span className="group-hover/item:text-white transition-colors duration-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full btn-secondary">
                    Book Now
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-16 p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-gold/20">
          <p className="text-xl text-gray-300 mb-6">
            Need something specific? We offer custom grooming packages
          </p>
          <button className="btn-primary">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}