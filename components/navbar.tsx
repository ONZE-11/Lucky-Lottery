"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Gavel } from "lucide-react"
import ThemeToggle from "./theme-toggle"
import { motion, AnimatePresence } from "framer-motion"
import { useTranslation } from "react-i18next"
import Link from "next/link"
import { usePathname } from "next/navigation"
import LanguageSwitcher from "./language-switcher"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { t } = useTranslation()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: t("navbar.home"), href: "/" },
    { name: t("navbar.services"), href: "/services" },
    { name: t("navbar.aboutUs"), href: "/about" },
    { name: t("navbar.testimonials"), href: "/testimonials" },
    { name: t("navbar.contact"), href: "/contact" },
  ]

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <motion.a
              href="/"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-2xl font-bold text-lawyer-primary dark:text-lawyer-accent-foreground"
            >
              <Gavel className="h-7 w-7 text-lawyer-accent" />
              ImmigrantLaw
            </motion.a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-1 items-center">
            <div className="flex space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                >
                  <Button
                    variant="ghost"
                    asChild
                    className={`
                    text-foreground hover:text-lawyer-primary dark:hover:text-lawyer-accent-foreground
                    ${
                      pathname === item.href
                        ? "bg-lawyer-secondary/70 dark:bg-lawyer-secondary/30 font-semibold" +
                          " hover:bg-lawyer-secondary/80 dark:hover:bg-lawyer-accent/10" // Specific hover for active
                        : "hover:bg-lawyer-secondary/50 dark:hover:bg-lawyer-secondary/20" // Normal hover
                    }
                  `}
                  >
                    <Link href={item.href}>{item.name}</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="ml-2 flex items-center gap-2"
            >
              <LanguageSwitcher />
              <ThemeToggle />
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2"
            >
              <LanguageSwitcher />
              <ThemeToggle />
            </motion.div>
            <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="ml-2 text-foreground">
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/90 backdrop-blur-md border-t border-border"
          >
            <div className="container mx-auto px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Button
                  key={item.href}
                  variant="ghost"
                  asChild
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                  w-full justify-start text-foreground hover:text-lawyer-primary dark:hover:text-lawyer-accent-foreground
                  ${
                    pathname === item.href
                      ? "bg-lawyer-secondary/70 dark:bg-lawyer-secondary/30 font-semibold" +
                        " hover:bg-lawyer-secondary/80 dark:hover:bg-lawyer-accent/10" // Specific hover for active
                      : "hover:bg-lawyer-secondary/50 dark:hover:bg-lawyer-secondary/20" // Normal hover
                  }
                `}
                >
                  <Link href={item.href}>{item.name}</Link>
                </Button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
