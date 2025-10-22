import { ArrowRight, Star, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'linear-gradient(rgba(13, 13, 13, 0.75), rgba(26, 26, 26, 0.85)), url(https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80)'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/50"></div>
      
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="relative z-10 container-width text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex justify-center mb-6 animate-float">
            <div className="flex space-x-1 bg-gold/10 px-6 py-2 rounded-full backdrop-blur-sm border border-gold/30">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-gold fill-current drop-shadow-glow" />
              ))}
              <span className="ml-3 text-gold font-semibold">Rated 4.9/5</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
            Master the Art of
            <span className="block mt-2 text-gradient bg-gradient-gold bg-clip-text text-transparent drop-shadow-2xl">
              Grooming
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience premium barbering with traditional techniques and modern style. 
            <span className="block mt-2 text-gold-light">Where every cut is a masterpiece.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="btn-primary flex items-center space-x-2 text-lg group">
              <span>Book Appointment</span>
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            
            <button className="btn-secondary text-lg flex items-center space-x-2 group">
              <Sparkles className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
              <span>View Gallery</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: '15+', label: 'Years Experience' },
              { value: '5000+', label: 'Happy Clients' },
              { value: '4.9', label: 'Star Rating' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="group relative text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-gold/20 hover:border-gold/50 transition-all duration-300 hover:scale-105 hover:shadow-gold"
              >
                <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center shadow-gold">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse shadow-glow"></div>
        </div>
      </div>
    </section>
  )
}