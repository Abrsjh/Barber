'use client'

import { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'James Mitchell',
    rating: 5,
    review: 'Absolutely phenomenal experience! Marcus gave me the best haircut I&apos;ve had in years. The attention to detail and traditional hot towel service made it feel like a luxury experience.',
    service: 'The Royal Treatment',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 2,
    name: 'Robert Chen',
    rating: 5,
    review: 'Elite Cuts is the real deal. Professional atmosphere, skilled barbers, and they really listen to what you want. Been coming here for 3 years and never disappointed.',
    service: 'Premium Haircut',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 3,
    name: 'Michael Torres',
    rating: 5,
    review: 'The traditional shave here is incredible. David takes his time and the results are perfect every time. Worth every penny for the quality and experience.',
    service: 'Traditional Shave',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 4,
    name: 'Alexander Park',
    rating: 5,
    review: 'Clean, professional, and the staff really knows their craft. Anthony did an amazing job on my beard trim and styling. Highly recommend!',
    service: 'Beard Grooming',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 5,
    name: 'Daniel Kim',
    rating: 5,
    review: 'Best barbershop in the city! The atmosphere is great, the barbers are true professionals, and I always leave looking and feeling amazing.',
    service: 'Premium Haircut',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  }
]

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="section-padding bg-gray-900">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Don&apos;t just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-primary border border-gold/20 rounded-lg p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <div className="flex space-x-1">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-gold fill-current" />
                ))}
              </div>
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-300 text-center mb-8 leading-relaxed">
              &ldquo;{testimonials[currentSlide].review}&rdquo;
            </blockquote>

            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={testimonials[currentSlide].image}
                  alt={testimonials[currentSlide].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center">
                <div className="font-semibold text-white text-lg">
                  {testimonials[currentSlide].name}
                </div>
                <div className="text-gold text-sm">
                  {testimonials[currentSlide].service}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gold/10 hover:bg-gold/20 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gold" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gold/10 hover:bg-gold/20 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gold" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-gold' : 'bg-gold/30'
              }`}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">4.9/5</div>
            <div className="text-gray-300">Average Rating</div>
            <div className="flex justify-center mt-2">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-gold fill-current" />
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">500+</div>
            <div className="text-gray-300">5-Star Reviews</div>
          </div>
          
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">98%</div>
            <div className="text-gray-300">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  )
}