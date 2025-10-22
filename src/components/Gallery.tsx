'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Classic pompadour haircut',
    category: 'haircuts'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Traditional hot towel shave',
    category: 'shaves'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Modern fade haircut',
    category: 'haircuts'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Beard grooming and styling',
    category: 'beards'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Professional business cut',
    category: 'haircuts'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Vintage barbershop experience',
    category: 'experience'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Precision beard trim',
    category: 'beards'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    alt: 'Straight razor shave',
    category: 'shaves'
  }
]

const categories = ['all', 'haircuts', 'shaves', 'beards', 'experience']

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory)

  return (
    <section id="gallery" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-primary to-gray-900"></div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase px-4 py-2 bg-gold/10 rounded-full border border-gold/30">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing our finest cuts, shaves, and styling work
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium capitalize transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-gold text-primary shadow-gold scale-105'
                  : 'bg-white/5 border-2 border-gold/30 text-gold hover:border-gold hover:shadow-gold hover:scale-105 backdrop-blur-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group shadow-lg hover:shadow-gold-lg transition-all duration-500"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="bg-gradient-gold text-primary px-6 py-3 rounded-lg font-semibold shadow-gold-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  View Full
                </div>
              </div>
              <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-gold/90 text-primary text-xs font-bold px-3 py-1 rounded-full capitalize backdrop-blur-sm">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-fade-in">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gold transition-all duration-300 hover:scale-110 hover:rotate-90"
              >
                <X className="h-8 w-8" />
              </button>
              <Image
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                width={800}
                height={800}
                className="max-w-full max-h-full object-contain rounded-2xl shadow-gold-lg"
              />
            </div>
          </div>
        )}

        <div className="text-center mt-16 p-8 bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 backdrop-blur-sm rounded-2xl border border-gold/30">
          <p className="text-xl text-gray-300 mb-6">
            Ready to experience our premium service?
          </p>
          <button className="btn-primary">
            Book Your Appointment
          </button>
        </div>
      </div>
    </section>
  )
}