"use client"

import { useRef } from "react"
import { motion } from "framer-motion"

export default function Process() {
  const ref = useRef(null)

const steps = [
  {
    number: "01",
    title: "Share Your Requirement",
    description:
      "Tell us about your business, goals, and project ideas.",
  },
  {
    number: "02",
    title: "Planning & Proposal",
    description:
      "We define the scope, timeline, and best solution for your business.",
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "We create modern websites and apps focused on speed and usability.",
  },
  {
    number: "04",
    title: "Review & Revisions",
    description:
      "Review the progress, share feedback, and request final refinements.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "Go live with confidence and receive ongoing technical support whenever needed.",
  },
];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
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
            <div className="text-xs uppercase tracking-widest text-white/80">How We Work</div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Our Process
            <br />
            <span className="text-white/90">Step by Step</span>
          </h2>
        </motion.div>

        <div
          ref={ref}
          className="relative"
        >
          {/* Vertical line with improved visibility */}
          <div className="absolute left-9.75 top-0 bottom-0 w-0.5 bg-white/30 md:left-1/2"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start md:items-center gap-8 mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : ""} pl-24 md:pl-0`}>
                {/* Increase contrast of step numbers from 10% to 40% */}
                <div className={`text-5xl md:text-7xl font-bold text-white/40 mb-4 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {step.number}
                </div>
                <h3 className={`text-2xl font-bold mb-2 text-white ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  {step.title}
                </h3>
                {/* Increase contrast of descriptions from 70% to 85% */}
                <p className={`text-white/85 ${index % 2 === 0 ? "md:text-right md:ml-auto" : ""} ${
                  index % 2 === 0 ? "md:max-w-sm md:inline-block" : "max-w-sm"
                }`}>
                  {step.description}
                </p>
              </div>

              <div className="relative flex items-center justify-center z-10 absolute-vertical-center md:static">
                {/* Increase border contrast from 30% to 40% */}
                <div className="w-20 h-20 border-2 border-white/40 flex items-center justify-center bg-[#0a0a0a] group-hover:border-white/60 transition-all duration-300">
                  <div className="text-xl font-bold text-white">{step.number}</div>
                </div>
              </div>

              <div className="flex-1 hidden md:block">
                {/* Increase horizontal line contrast from 20% to 30% */}
                <div className="h-0.5 w-full bg-white/30"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-32 h-32 border border-white/10"></div>
      <div className="absolute bottom-60 left-20 w-40 h-40 border border-white/5"></div>

      {/* Add custom styles for mobile positioning */}
      <style jsx>{`
        .absolute-vertical-center {
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        
        @media (min-width: 768px) {
          .absolute-vertical-center {
            position: static;
            transform: none;
          }
        }
      `}</style>
    </section>
  )
}
