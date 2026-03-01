"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 text-white overflow-hidden">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6 relative">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Designing intuitive <br />
          digital experiences <br />
          that drive engagement.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl"
        >
          UI/UX Designer focused on usability, interaction design and scalable design systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-10 flex gap-6"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-purple-600 rounded-full font-semibold hover:scale-105 hover:bg-purple-700 transition duration-300"
          >
            View My Work
          </a>

          <a
            href="/resume.pdf"
            className="px-8 py-3 border border-gray-600 rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            Download Resume
          </a>
        </motion.div>
      </section>

      {/* ABOUT */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-24 px-6 text-center bg-black/40 backdrop-blur-xl"
      >
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed text-lg">
          I transform complex problems into simple, intuitive interfaces. 
          My approach combines research, structured design systems and strong 
          visual hierarchy to create seamless digital experiences.
        </p>
      </motion.section>

      {/* PROJECTS */}
      <section id="projects" className="py-28 px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">Selected Work</h2>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">

          {/* PROJECT 1 */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-white/5 p-8 rounded-3xl backdrop-blur-xl hover:shadow-2xl hover:shadow-purple-600/30 transition duration-500"
          >
            <Image
              src="/projects/ecommerce-web.png"
              alt="E-commerce Project"
              width={800}
              height={500}
              className="rounded-2xl mb-8"
            />

            <h3 className="text-2xl font-semibold mb-3">
              Styvora – E-commerce App
            </h3>

            <p className="text-gray-400 mb-4">
              Redesigned checkout flow and improved product discovery.
            </p>

            <span className="text-purple-400 text-sm">
              Reduced checkout steps by 28%
            </span>
          </motion.div>

          {/* PROJECT 2 */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="bg-white/5 p-8 rounded-3xl backdrop-blur-xl hover:shadow-2xl hover:shadow-purple-600/30 transition duration-500"
          >
            <Image
              src="/projects/fitness-tracker.png"
              alt="Fitness App"
              width={800}
              height={500}
              className="rounded-2xl mb-8"
            />

            <h3 className="text-2xl font-semibold mb-3">
              Fitness Tracking App
            </h3>

            <p className="text-gray-400 mb-4">
              Simplified onboarding and enhanced user engagement.
            </p>

            <span className="text-purple-400 text-sm">
              Onboarding reduced from 6 → 3 steps
            </span>
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Sri Santhosh Rajan — UI/UX Designer
      </footer>

    </div>
  );
}