"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <div className="min-h-screen bg-white text-black dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-purple-950 dark:text-white transition-colors duration-500 overflow-hidden">
      <ThemeToggle />

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
          className="mt-6 text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl"
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
            className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold hover:scale-105 hover:bg-purple-700 transition duration-300"
          >
            View My Work
          </a>

          <a
            href="/resume.pdf"
            className="px-8 py-3 border border-gray-400 dark:border-gray-600 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300"
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
        className="py-24 px-6 text-center bg-gray-100 dark:bg-black/40 backdrop-blur-xl transition-colors duration-500"
      >
        <h2 className="text-4xl font-bold mb-8">About Me</h2>
        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
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
  whileHover={{ scale: 1.04, y: -6 }}
  className="group bg-gray-100 dark:bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl hover:shadow-2xl hover:shadow-purple-600/30 transition duration-500"
>
            <Image
              src="/projects/sihomes-new.png"
              alt="SI Homes Website"
              width={800}
              height={500}
              className="rounded-2xl mb-8 transition duration-300 group-hover:scale-105"
            />

            <h3 className="text-2xl font-semibold mb-3">SI Homes Website</h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Modern real estate UI/UX design with clean property listings and detail pages.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
  Figma • UI/UX • Prototyping
</p>

            <span className="text-purple-600 dark:text-purple-400 text-sm block mb-6">
              Structured browsing, property details and interactions
            </span>

            <a
              href="https://www.figma.com/proto/JHcE2lqcmFKToZwQxgM2cW/Untitled?node-id=3-2&viewport=121%2C125%2C0.53&t=WY4AZ0r5fZk55u4l-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A2&page-id=0%3A1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition"
            >
              View Case Study
            </a>
          </motion.div>

          {/* PROJECT 2 */}
          <motion.div
  whileHover={{ scale: 1.04, y: -6 }}
  className="group bg-gray-100 dark:bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl hover:shadow-2xl hover:shadow-purple-600/30 transition duration-500"
>
            <Image
              src="/projects/foodapp-new.png"
              alt="Food Ordering App"
              width={800}
              height={500}
              className="rounded-2xl mb-8 transition duration-300 group-hover:scale-105"
            />

            <h3 className="text-2xl font-semibold mb-3">Food Ordering App</h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Simple and intuitive food ordering UI with quick menu browsing and clear actions.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
  Figma • UI/UX • Prototyping
</p>

            <span className="text-purple-600 dark:text-purple-400 text-sm block mb-6">
              Easy menu flow with warm and engaging visuals
            </span>

            <a
              href="https://www.figma.com/proto/XZvnMtm1AYuWozBCjvAlpk/Food-ordering-mac?node-id=1-3&p=f&viewport=24%2C140%2C0.54&t=0kDprKs2IW5iN4MT-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition"
            >
              View Case Study
            </a>
          </motion.div>

          {/* PROJECT 3 */}
          <motion.div
  whileHover={{ scale: 1.04, y: -6 }}
  className="group bg-gray-100 dark:bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl hover:shadow-2xl hover:shadow-purple-600/30 transition duration-500"
>
            <Image
              src="/projects/ecommerce-new.png"
              alt="E-commerce Website"
              width={800}
              height={500}
              className="rounded-2xl mb-8 transition duration-300 group-hover:scale-105"
            />

            <h3 className="text-2xl font-semibold mb-3">Styvora – E-commerce App</h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              E-commerce UI focused on product discovery and a smoother checkout experience.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
  Figma • UI/UX • Prototyping
</p>

            <span className="text-purple-600 dark:text-purple-400 text-sm block mb-6">
              Improved browsing flow and reduced checkout friction
            </span>

            <a
              href="https://www.figma.com/proto/gYDDTJkAYoUHXt5sQd8EIR/Full-E-Commerce-Website-UI-UX-Design--Copy-?node-id=34-213&p=f&viewport=77%2C10%2C0.6&t=llqK813eQrjwXl2d-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=34%3A213&page-id=1%3A3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition"
            >
              View Case Study
            </a>
          </motion.div>

          {/* PROJECT 4 */}
          <motion.div
  whileHover={{ scale: 1.04, y: -6 }}
  className="group bg-gray-100 dark:bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-xl hover:shadow-2xl hover:shadow-purple-600/30 transition duration-500"
>
            <Image
              src="/projects/fitness-new.png"
              alt="Fitness Tracking App"
              width={800}
              height={500}
              className="rounded-2xl mb-8 transition duration-300 group-hover:scale-105"
            />

            <h3 className="text-2xl font-semibold mb-3">Fitness Tracking App</h3>

            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Fitness app UI with simplified onboarding and a cleaner tracking experience.
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
  Figma • UI/UX • Prototyping
</p>

            <span className="text-purple-600 dark:text-purple-400 text-sm block mb-6">
              Better onboarding and focused user journey
            </span>

            <a
              href="https://www.figma.com/proto/XlnTQrapXOfJNSPJQtreAc/Fitness-Tracking-App-UI-Design--Fully-Interactive?node-id=35-905&p=f&viewport=300%2C79%2C0.64&t=vhTApbgASoJvHjYe-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=35%3A905&page-id=0%3A1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition"
            >
              View Case Study
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-600 dark:text-gray-500 text-sm border-t border-gray-300 dark:border-gray-800 transition-colors duration-500">
        © {year ?? ""} Sri Santhosh Rajan — UI/UX Designer
      </footer>
    </div>
  );
}