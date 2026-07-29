"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for professionals and local businesses",
      price: "₹14,999",
      features: [
        "Up to 5 Pages",
        "Responsive Website",
        "WhatsApp Integration",
        "Contact Form",
        "Basic SEO Setup",
        "Google Maps",
        "1 Month Support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Business",
      description: "Ideal for growing businesses and startups",
      price: "₹29,999",
      features: [
        "Up to 10 Pages",
        "Premium UI Design",
        "Speed Optimized",
        "SEO Ready",
        "Lead Generation Forms",
        "Google Analytics",
        "3 Months Support",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Custom",
      description: "Tailored solutions for unique business needs",
      price: "Let's Talk",
      features: [
        "Unlimited Pages",
        "Custom Features",
        "Admin Dashboard",
        "API Integrations",
        "Booking or Payment System",
        "Business Automation",
        "Priority Support",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
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
            <div className="text-xs uppercase tracking-widest text-white/80">
              Pricing
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Website Packages
            <br />
            <span className="text-white/70">Built for Every Business</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`border-2 ${
                plan.popular ? "border-white" : "border-white/20"
              } p-8 relative bg-white/5 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-white text-black text-xs uppercase tracking-widest py-1 px-3 -mt-3 -mr-3 font-medium">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2 text-white">
                {plan.name}
              </h3>

              <p className="text-white/70 mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">
                  {plan.price}
                </span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start group">
                    <Check className="w-5 h-5 mr-2 text-white/60 group-hover:text-white shrink-0 mt-0.5 transition-colors duration-300" />
                    <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 text-sm uppercase tracking-widest transition-all duration-300 ${
                  plan.popular
                    ? "bg-white text-black hover:bg-white/90"
                    : "border-2 border-white/30 text-white hover:border-white hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </button>

              {plan.popular && (
                <div className="absolute inset-0 border-b-2 border-white opacity-20"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="absolute top-40 left-10 w-32 h-32 border border-white/10"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 border-2 border-white/5"></div>
    </section>
  );
}