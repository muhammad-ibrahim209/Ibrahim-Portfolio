'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { Home, User, Mail, Sun, Moon, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { ThemeProvider } from 'next-themes'

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/about', icon: User, label: 'About' },
  { href: '/contact', icon: Mail, label: 'Contact' },
]

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="flex h-screen">
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-card text-card-foreground shadow-sm z-10">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
              <div className="text-2xl font-bold">My Portfolio</div>
              <ThemeToggle />
            </div>
          </header>
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
            <div className="container mx-auto px-4 py-8">
              {children}
            </div>
          </main>
          <footer className="bg-card text-card-foreground shadow-sm">
            <div className="container mx-auto px-4 py-3 text-center">
              © 2023 My Portfolio. Muhammad Ibrahim 
            </div>
          </footer>
        </div>
      </div>
    </ThemeProvider>
  )
}

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) {
  const pathname = usePathname()

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-card text-card-foreground shadow-lg transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:relative lg:translate-x-0 transition-transform duration-200 ease-in-out`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4">
          <span className="text-2xl font-bold">Menu</span>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <ul className="flex-1 px-2">
          {navItems.map(({ href, icon: Icon, label }) => (
            <li key={href} className="mb-2">
              <Link href={href} passHref>
                <motion.div
                  className={`flex items-center px-4 py-3 rounded-md ${
                    pathname === href
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent hover:text-accent-foreground"
                  } transition-colors duration-200`}
                  onClick={() => setIsOpen(false)}
                  whileHover={{ x: 5 }}
                >
                  <Icon size={20} className="mr-3" />
                  <span>{label}</span>
                </motion.div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

