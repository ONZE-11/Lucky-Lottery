"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Ticket, Timer, Trophy } from "lucide-react"
import CountdownTimer from "./countdown-timer"
import { motion } from "framer-motion"

interface LotteryHeaderProps {
  round: number
  endTime: number
  isActive: boolean
}

export default function LotteryHeader({ round, endTime, isActive }: LotteryHeaderProps) {
  return (
    <div className="mb-10">
      <motion.div
        className="flex flex-col items-center justify-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center gradient-text">Lucky Lottery</h1>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl transition-colors duration-300">
          Pick 7 lucky numbers and win big! Buy tickets with USDT or LUCKY tokens.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card className="glass-card overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-700/5 dark:from-purple-500/20 dark:to-purple-700/10" />
            <CardContent className="p-6 flex items-center relative">
              <div className="bg-purple-100 dark:bg-purple-500/20 p-3 rounded-full mr-4 transition-colors duration-300">
                <Ticket className="h-6 w-6 text-purple-600 dark:text-purple-400 transition-colors duration-300" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">Current Round</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                  #{round}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="glass-card overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-brand-700/5 dark:from-brand-500/20 dark:to-brand-700/10" />
            <CardContent className="p-6 flex items-center relative">
              <div className="bg-brand-100 dark:bg-brand-500/20 p-3 rounded-full mr-4 transition-colors duration-300">
                <Timer className="h-6 w-6 text-brand-600 dark:text-brand-400 transition-colors duration-300" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">
                  {isActive ? "Time Remaining" : "Lottery Ended"}
                </p>
                {isActive ? (
                  <CountdownTimer targetDate={endTime} />
                ) : (
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                    Closed
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="glass-card overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-700/5 dark:from-green-500/20 dark:to-green-700/10" />
            <CardContent className="p-6 flex items-center relative">
              <div className="bg-green-100 dark:bg-green-500/20 p-3 rounded-full mr-4 transition-colors duration-300">
                <Trophy className="h-6 w-6 text-green-600 dark:text-green-400 transition-colors duration-300" />
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm transition-colors duration-300">Prize Pool</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
                  10,000 LUCKY
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
