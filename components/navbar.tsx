"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import ThemeToggle from "./theme-toggle"

interface NavbarProps {
  currentPage: string
  setCurrentPage: (page: string) => void
  connected: boolean
}

export default function Navbar({ currentPage, setCurrentPage, connected }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", id: "home" },
    { name: "How It Works", id: "how-it-works" },
    { name: "Stats", id: "stats" },
    { name: "Winners", id: "winners" },
    { name: "Play Lottery", id: "play" },
  ]

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-green-500 to-blue-500">
              Lucky Lottery
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-1 items-center">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? "default" : "ghost"}
                onClick={() => setCurrentPage(item.id)}
                className={
                  currentPage === item.id
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-200"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                }
              >
                {item.name}
              </Button>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="ml-2">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <div className="container mx-auto px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => {
                  setCurrentPage(item.id)
                  setMobileMenuOpen(false)
                }}
                className={`w-full justify-start ${
                  currentPage === item.id
                    ? "bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900 hover:text-blue-800 dark:hover:text-blue-200"
                    : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {item.name}
              </Button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
