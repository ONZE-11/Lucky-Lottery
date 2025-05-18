"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface CountdownTimerProps {
  targetDate: number
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        clearInterval(interval)
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-brand-100/50 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 font-mono rounded-md px-2 py-1 min-w-[2.5rem] text-center"
      >
        {value.toString().padStart(2, "0")}
      </motion.div>
      <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">{label}</span>
    </div>
  )

  return (
    <div className="flex gap-2 items-end">
      <TimeUnit value={timeLeft.days} label="days" />
      <span className="text-gray-400 dark:text-gray-500 mb-1">:</span>
      <TimeUnit value={timeLeft.hours} label="hours" />
      <span className="text-gray-400 dark:text-gray-500 mb-1">:</span>
      <TimeUnit value={timeLeft.minutes} label="min" />
      <span className="text-gray-400 dark:text-gray-500 mb-1">:</span>
      <TimeUnit value={timeLeft.seconds} label="sec" />
    </div>
  )
}
