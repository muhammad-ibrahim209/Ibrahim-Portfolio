
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <motion.section
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col md:flex-
row items-center gap-8"
      >
        <div className="w-48 h-48 relative rounded-full overflow-hidden">
          <Image
            src="/placeholder.svg?height=200&width=200"
            alt="Profile Picture"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="text-blue-900 text-4xl shadow hover:shadow-lg font-bold mb-4 italic font-mono transition hover:-translate-y-1 hover:transitionall">Muhammad Ibrahim</h1>

        <div>
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-lg">
            I'm a passionate web developer with a keen eye for design and a love for creating 
            seamless user experiences. With a background in computer science and years of 
            hands-on experience, I specialize in building modern, responsive websites and 
            web applications.
          </p>
        </div>
      </motion.section>

      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-card text-card-foreground p-6 rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
        <p>
          My journey in web development began during my college years when I discovered 
          the power of creating interactive web experiences. Since then, I've been on a 
          continuous learning path, staying up-to-date with the latest technologies and 
          best practices in the ever-evolving world of web development.
        </p>
      </motion.section>

      <motion.section
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Bachelor's Degree in Computer Science</li>
            <li>Full-Stack Web Development Bootcamp</li>
            <li>Various online courses and certifications</li>
          </ul>
        </div>
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Interests</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Artificial Intelligence</li>
            <li>Open Source Software</li>
            <li>Blockchain Technology</li>
          </ul>
        </div>
      </motion.section>
    </motion.div>
  )
}

