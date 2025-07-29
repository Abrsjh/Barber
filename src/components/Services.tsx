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
    <section id="services" className="section-padding bg-gray-900">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our Services
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
                className="bg-primary border border-gold/20 rounded-lg p-8 hover:border-gold/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gold/10 rounded-lg mb-6 group-hover:bg-gold/20 transition-colors">
                  <IconComponent className="h-8 w-8 text-gold" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-bold text-gold">
                    {service.price}
                  </span>
                  <span className="text-gray-400">
                    {service.duration}
                  </span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full btn-secondary hover:bg-gold hover:text-primary">
                  Book Now
                </button>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-4">
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