"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

const testimonials = [
  {
    quote:
      "Our website looks professional, loads quickly, and makes it easy for customers to explore our tour packages and send enquiries. The entire experience was smooth from start to finish.",
    author: "Rajni Soni",
    role: "Founder, Expert Holiday & Tours",
  },
  {
    quote:
      "I wanted a portfolio that truly represented my work, and that's exactly what I got. The website is clean, responsive, and has helped me showcase my designs with confidence.",
    author: "Avni Soni",
    role: "Professional Graphic Designer",
  },
  {
    quote:
      "The team understood our requirements, communicated clearly throughout the project, and delivered everything on time. The final website is modern, fast, and easy to use.",
    author: "Prateek Saravagi",
    role: "Branch Manager, HDFC Bank",
  },
  {
    quote:
      "The website is simple, informative, and easy for patients to navigate. We appreciated the attention to detail, timely delivery, and continued support after the project was completed.",
    author: "Dr. Jodengra Patel",
    role: "HDM, Metro Hospital Jabalpur",
  },
];

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-white/40"></div>
            <div className="text-xs uppercase tracking-widest text-white/80">Testimonials</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            What Our Clients
            <br />
            <span className="text-white/70">Say About Us</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative border-2 border-white/20 p-8 md:p-12 bg-white/5 backdrop-blur-sm">
            <div className="absolute top-6 right-8 text-white/10 opacity-60">
              <Quote size={120} />
            </div>

            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="min-h-50 flex flex-col"
                >
                  <blockquote className="text-2xl md:text-3xl font-light mb-8 leading-relaxed text-white">
                    {testimonials[activeIndex].quote}
                  </blockquote>
                  <div className="mt-auto flex items-center">
                    <div className="w-12 h-px bg-white/40 mr-4"></div>
                    <div>
                      <div className="font-bold text-white">{testimonials[activeIndex].author}</div>
                      <div className="text-white/70 text-sm">{testimonials[activeIndex].role}</div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination indicator */}
            <div className="mt-8 flex items-center">
              <div className="text-white/60 text-sm mr-4">
                {activeIndex + 1} / {testimonials.length}
              </div>
              <div className="flex-1 h-px bg-white/20 relative">
                <motion.div 
                  className="h-px bg-white absolute top-0 left-0"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: `${((activeIndex + 1) / testimonials.length) * 100}%`,
                  }}
                  transition={{ duration: 0.3 }}
                ></motion.div>
              </div>
            </div>

            <div className="flex justify-end mt-8 gap-4">
              <button 
                onClick={prev} 
                className="p-2 border-2 border-white/20 hover:border-white/60 hover:bg-white/5 transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
              </button>
              <button 
                onClick={next} 
                className="p-2 border-2 border-white/20 hover:border-white/60 hover:bg-white/5 transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Visual accent elements */}
      <div className="absolute top-40 right-20 w-56 h-56 border border-white/5"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-white/10"></div>
    </section>
  )
}
