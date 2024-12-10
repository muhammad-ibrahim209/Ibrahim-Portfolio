'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

const projects = [
  { title: 'E-commerce Platform', description: 'A full-featured online store built with Next.js and Stripe', image: '/images/e-commerce.jpg' },
  { title: 'Blog with CMS', description: 'A blog platform with a custom CMS using Next.js and Sanity.io', image: '/images/e-commerce.jpeg' },
  { title: 'Task Management App', description: 'A productivity app built with React and Firebase', image: '/images/e-commerce.jpg' },
]

export default function ClientLayout() {
  const [currentProject, setCurrentProject] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prevProject) => (prevProject + 1) % projects.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-16">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Hi, I'm a web developer passionate about creating beautiful and functional websites. 
          With expertise in React, Next.js, and Tailwind CSS, I bring ideas to life through code.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
            <Linkedin size={24} />
          </a>
          <a href="mailto:example@email.com" className="p-2 rounded-full bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
            <Mail size={24} />
          </a>
        </div>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentProject ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent flex items-end p-8">
              <div>
                <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="space-y-2">
            {['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Node.js'].map((skill) => (
              <li key={skill} className="flex items-center">
                <ArrowRight size={16} className="mr-2 text-primary" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <p>
            With over 5 years of web development experience, I've worked on a variety of projects ranging from small business websites to large-scale web applications. My focus is on creating responsive, accessible, and performant web experiences.
          </p>
        </div>
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <p className="mb-4">
            Check out my GitHub for recent projects, including:
          </p>
          <ul className="space-y-2">
            {projects.map((project) => (
              <li key={project.title} className="flex items-center">
                <ArrowRight size={16} className="mr-2 text-primary" />
                <span>{project.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>
    </div>
  )
}

