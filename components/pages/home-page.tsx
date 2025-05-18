"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Ticket, Trophy, Shield } from "lucide-react"
import { motion } from "framer-motion"

interface HomePageProps {
  onConnect?: () => void
}

export default function HomePage({ onConnect }: HomePageProps) {
  return (
    <div className="space-y-20 py-8">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Win Big with <span className="gradient-text">Lucky Lottery</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
            The first decentralized lottery on the blockchain. Pick 7 lucky numbers, buy tickets with USDT or LUCKY
            tokens, and win amazing prizes!
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" onClick={onConnect} className="btn-primary rounded-xl">
                Play Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                onClick={() => (window.location.href = "#how-it-works")}
                className="rounded-xl"
              >
                How It Works
              </Button>
            </motion.div>
          </div>
          <div className="flex flex-wrap gap-6 pt-4">
            <div className="flex items-center gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-gray-600 dark:text-gray-400">100% Transparent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-gray-600 dark:text-gray-400">Provably Fair</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
                <Check className="h-4 w-4 text-green-600 dark:text-green-400" />
              </div>
              <span className="text-gray-600 dark:text-gray-400">Instant Payouts</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute inset-0 bg-gradient-radial from-brand-200/50 to-transparent dark:from-brand-900/30 rounded-full opacity-70 blur-3xl"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <motion.div
                className="bg-white dark:bg-gray-800 p-8 rounded-full shadow-xl glass-card"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-brand-400 via-accent1-light to-accent3-light dark:from-brand-500 dark:via-accent1-dark dark:to-accent3-dark rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  ></motion.div>
                  <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <Ticket className="h-16 w-16 mx-auto text-brand-500 dark:text-brand-400 mb-4" />
                      <div className="text-3xl font-bold text-gray-800 dark:text-gray-200">10,000</div>
                      <div className="text-green-600 dark:text-green-400 font-medium">LUCKY Prize</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose Lucky Lottery?
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our blockchain-based lottery offers transparency, fairness, and exciting rewards
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="glass-card p-6 rounded-xl hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5 }}
          >
            <div className="bg-brand-100/50 dark:bg-brand-900/30 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Ticket className="h-7 w-7 text-brand-600 dark:text-brand-400" />
            </div>
            <h3 className="text-xl font-bold mb-2">Easy to Play</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Simply pick 7 numbers between 1-50, purchase your tickets with USDT or LUCKY tokens, and wait for the
              draw.
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-6 rounded-xl hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="bg-accent1-light/10 dark:bg-accent1-dark/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Trophy className="h-7 w-7 text-accent1-light dark:text-accent1-dark" />
            </div>
            <h3 className="text-xl font-bold mb-2">Big Prizes</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Win substantial prizes in LUCKY tokens. The more numbers you match, the bigger your prize.
            </p>
          </motion.div>

          <motion.div
            className="glass-card p-6 rounded-xl hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5 }}
          >
            <div className="bg-accent3-light/10 dark:bg-accent3-dark/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-7 w-7 text-accent3-light dark:text-accent3-dark" />
            </div>
            <h3 className="text-xl font-bold mb-2">Secure & Fair</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Our blockchain technology ensures complete transparency and fairness in every draw.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="glass-card p-8 md:p-12 rounded-2xl overflow-hidden relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/10 via-accent1-light/10 to-accent3-light/10 dark:from-brand-500/20 dark:via-accent1-dark/20 dark:to-accent3-dark/20" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Ready to Try Your Luck?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl">
              Join thousands of players who have already won prizes in our lottery. The next draw could make you a
              winner!
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" onClick={onConnect} className="btn-primary rounded-xl py-6 px-8 text-lg">
              Play Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}
