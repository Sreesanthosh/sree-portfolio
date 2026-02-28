"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white">

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6">
        <motion.h1 
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm Sri 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-300 max-w-2xl"
        >
          UI/UX Designer crafting clean, user-centered and visually stunning digital experiences.
        </motion.p>

        <motion.a
          href="#projects"
          whileHover={{ scale: 1.1 }}
          className="mt-8 px-8 py-3 bg-purple-600 rounded-full font-semibold hover:bg-purple-700 transition"
        >
          View My Work
        </motion.a>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 text-center bg-black/30 backdrop-blur-lg">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed">
          I specialize in user-centered design, wireframing, and prototyping.
          I build intuitive interfaces using Figma and modern design systems.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">E-Commerce UI</h3>
            <p className="text-gray-300">
              Designed a modern shopping experience with clean layouts and intuitive navigation.
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Fitness App UI</h3>
            <p className="text-gray-300">
              Created a fitness tracking interface with engaging visuals and smooth interactions.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}