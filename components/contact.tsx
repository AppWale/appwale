"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = "918319313746";

    const whatsappMessage = `
Hello Appwale Team 👋

I am interested in getting a website/app developed.

- Name: ${formData.name}
- WhatsApp Number: ${formData.phone}
- Requirement: ${formData.service}

Project Details: ${formData.message}

Thank you 😊
`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
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
              Contact
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
            Let&apos;s Build
            <br />
            <span className="text-white/70">Something Great</span>
          </h2>
        </motion.div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label
                htmlFor="name"
                className="block text-sm uppercase tracking-widest text-white/70 mb-2"
              >
                Your Name
              </label>

              <input
                required
                type="text"
                id="name"
                autoComplete="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                  })
                }
                className="w-full bg-white/5 border-2 border-white/20 p-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors"
                placeholder="Enter your name"
              />
            </div>


            <div>
              <label
                htmlFor="phone"
                className="block text-sm uppercase tracking-widest text-white/70 mb-2"
              >
                WhatsApp Number
              </label>

              <input
                required
                type="tel"
                id="phone"
                autoComplete="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                className="w-full bg-white/5 border-2 border-white/20 p-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors"
                placeholder="Enter WhatsApp number"
              />
            </div>


            <div>
              <label
                htmlFor="service"
                className="block text-sm uppercase tracking-widest text-white/70 mb-2"
              >
                Requirement
              </label>

              <select
                required
                id="service"
                value={formData.service}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    service: e.target.value,
                  })
                }
                className="w-full bg-white/5 border-2 border-white/20 p-3 text-white focus:border-white focus:outline-none transition-colors"
              >
                <option value="" className="bg-black">
                  Select Service
                </option>

                <option className="bg-black">
                  Business Website
                </option>

                <option className="bg-black">
                  Professional Portfolio Website
                </option>

                <option className="bg-black">
                  Mobile Application
                </option>

                <option className="bg-black">
                  Old Website Redesign
                </option>

                <option className="bg-black">
                  E-Commerce Website
                </option>

                <option className="bg-black">
                  Custom Software Solution
                </option>

                <option className="bg-black">
                  Other Requirement
                </option>

              </select>
            </div>


            <div>
              <label
                htmlFor="message"
                className="block text-sm uppercase tracking-widest text-white/70 mb-2"
              >
                Project Details
              </label>

              <textarea
                required
                id="message"
                autoComplete="off"
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    message: e.target.value,
                  })
                }
                className="w-full bg-white/5 border-2 border-white/20 p-3 text-white placeholder:text-white/30 focus:border-white focus:outline-none transition-colors"
                placeholder="Tell us about your requirements..."
              ></textarea>
            </div>


            <button
              type="submit"
              className="w-full bg-white text-black py-3 text-sm uppercase tracking-widest hover:bg-white/90 transition-colors relative group overflow-hidden"
            >
              <span className="relative z-10">
                Send WhatsApp Enquiry
              </span>

              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>

            </button>

          </form>



          <div className="border-2 border-white/20 bg-white/5 backdrop-blur-sm p-8 h-full">

            <h3 className="text-2xl font-bold mb-6 text-white">
              Get In Touch
            </h3>


            <div className="space-y-8">


              <div className="flex items-start">
                <div className="bg-white/10 p-2 rounded-sm mr-4">
                  <Mail className="w-5 h-5 text-white" />
                </div>

                <div>
                  <div className="text-sm uppercase tracking-widest text-white/70 mb-2">
                    Business Email
                  </div>

                  <a
                    href="mailto:appwale.in@gmail.com"
                    className="text-white hover:text-white/70 transition-colors"
                  >
                    appwale.in@gmail.com
                  </a>

                </div>
              </div>



              <div className="flex items-start">

                <div className="bg-white/10 p-2 rounded-sm mr-4">
                  <Phone className="w-5 h-5 text-white" />
                </div>

                <div>

                  <div className="text-sm uppercase tracking-widest text-white/70 mb-2">
                    Call / WhatsApp
                  </div>

                  <a
                    href="tel:+918319313746"
                    className="text-white hover:text-white/70 transition-colors"
                  >
                    +91 8319 313746
                  </a>

                </div>

              </div>



              <div className="flex items-start">

                <div className="bg-white/10 p-2 rounded-sm mr-4">
                  <MapPin className="w-5 h-5 text-white" />
                </div>


                <div>

                  <div className="text-sm uppercase tracking-widest text-white/70 mb-2">
                    Office Location
                  </div>


                  <address className="not-italic text-white/80">

                    Appwale Software Solutions
                    <br />
                    C-26 Sanskar City, Katangi Road
                    <br />
                    Surtalai, Jabalpur, Madhya Pradesh, 482002

                  </address>


                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      <div className="absolute top-40 right-20 w-32 h-32 border-2 border-white/10"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-white/5"></div>

    </section>
  );
}