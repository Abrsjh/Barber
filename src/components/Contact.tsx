'use client'

import { useState } from 'react'
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const hours = [
    { day: 'Monday', time: '9:00 AM - 7:00 PM' },
    { day: 'Tuesday', time: '9:00 AM - 7:00 PM' },
    { day: 'Wednesday', time: '9:00 AM - 7:00 PM' },
    { day: 'Thursday', time: '9:00 AM - 8:00 PM' },
    { day: 'Friday', time: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', time: '10:00 AM - 5:00 PM' }
  ]

  return (
    <section id="contact" className="section-padding bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-primary to-primary"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      
      <div className="container-width relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-gold text-sm font-semibold tracking-wider uppercase px-4 py-2 bg-gold/10 rounded-full border border-gold/30">
              Contact Us
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready for your next great cut? Contact us to book your appointment or ask any questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gold/20">
              <h3 className="text-2xl font-bold mb-8 text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="group flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-gold group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2 text-lg">Address</h4>
                    <p className="text-gray-300 leading-relaxed">
                      123 Main Street<br />
                      Downtown District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-gold group-hover:scale-110 transition-transform duration-300">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2 text-lg">Phone</h4>
                    <p className="text-gray-300 text-lg">(555) 123-4567</p>
                  </div>
                </div>

                <div className="group flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center flex-shrink-0 shadow-gold group-hover:scale-110 transition-transform duration-300">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2 text-lg">Email</h4>
                    <p className="text-gray-300">info@elitecutsbarber.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gold/20">
              <h4 className="text-xl font-semibold mb-6 text-white flex items-center">
                <Clock className="h-6 w-6 text-gold mr-3" />
                Business Hours
              </h4>
              <div className="space-y-2">
                {hours.map((hour, index) => (
                  <div key={index} className="group flex justify-between items-center py-3 border-b border-gold/10 hover:border-gold/30 transition-colors">
                    <span className="text-gray-300 group-hover:text-white transition-colors">{hour.day}</span>
                    <span className="text-white font-medium bg-gold/10 px-3 py-1 rounded-full text-sm">{hour.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-gold/20">
            <h3 className="text-2xl font-bold mb-8 text-white">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gold/20 rounded-xl text-white placeholder-gray-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gold/20 rounded-xl text-white placeholder-gray-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-3">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gold/20 rounded-xl text-white placeholder-gray-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-300 mb-3">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gold/20 rounded-xl text-white focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="haircut">Premium Haircut</option>
                    <option value="shave">Traditional Shave</option>
                    <option value="royal">The Royal Treatment</option>
                    <option value="beard">Beard Grooming</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-800/50 border-2 border-gold/20 rounded-xl text-white placeholder-gray-400 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your preferred style or any special requests..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2 text-lg py-4 group"
              >
                <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-gold/10 via-gold/5 to-transparent backdrop-blur-sm rounded-3xl p-10 border border-gold/30 shadow-gold-lg">
            <h3 className="text-3xl font-bold mb-4 text-white">Ready to <span className="text-gradient">Book?</span></h3>
            <p className="text-gray-300 mb-8 text-lg">
              Call us directly or walk in during business hours. We also accept online bookings for your convenience.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="btn-primary text-lg">
                Book Online
              </button>
              <button className="btn-secondary text-lg">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}