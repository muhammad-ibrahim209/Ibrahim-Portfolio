'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, User, Mail, Menu, X } from 'lucide-react'

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/about', icon: User, label: 'About' },
  { href: '/contact', icon: Mail, label: 'Contact' },
]

export function SidebarNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="fixed left-0 top-0 h-full bg-white dark:bg-gray-800 shadow-lg z-50"
    >
      <motion.div
        variants={{
          open: { width: "240px" },
          closed: { width: "72px" }
        }}
        transition={{ duration: 0.3 }}
        className="h-full flex flex-col"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className="flex-1 pt-4">
          {navItems.map(({ href, icon: Icon, label }) => (
            <li key={href}>
              <Link href={href} passHref>
                <motion.div
                  className={`flex items-center px-4 py-3 ${
                    pathname === href
                      ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  } transition-colors duration-200`}
                  whileHover={{ x: 5 }}
                >
                  <Icon size={24} />
                  <motion.span
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -10 }
                    }}
                    transition={{ duration: 0.2 }}
                    className="ml-4"
                  >
                    {label}
                  </motion.span>
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.nav>
  )
}

