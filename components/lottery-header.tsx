"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Ticket, Timer, Trophy } from "lucide-react"
import CountdownTimer from "./countdown-timer"

interface LotteryHeaderProps {
  round: number
  endTime: number
  isActive: boolean
}

export default function LotteryHeader({ round, endTime, isActive }: LotteryHeaderProps) {
  return (
    <div className="mb-10">
      <div className="flex flex-col items-center justify-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-green-500 to-blue-500">
          Lucky Lottery
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl transition-colors duration-300">
          Pick 7 lucky numbers and win big! Buy tickets with USDT or LUCKY tokens.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/50 dark:to-purple-800/30 border-purple-200 dark:border-purple-700/50 transition-colors duration-300">
          <CardContent className="p-6 flex items-center">
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

        <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/50 dark:to-blue-800/30 border-blue-200 dark:border-blue-700/50 transition-colors duration-300">
          <CardContent className="p-6 flex items-center">
            <div className="bg-blue-100 dark:bg-blue-500/20 p-3 rounded-full mr-4 transition-colors duration-300">
              <Timer className="h-6 w-6 text-blue-600 dark:text-blue-400 transition-colors duration-300" />
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

        <Card className="bg-gradient-to-br from-green-50 to-white dark:from-green-900/50 dark:to-green-800/30 border-green-200 dark:border-green-700/50 transition-colors duration-300">
          <CardContent className="p-6 flex items-center">
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
      </div>
    </div>
  )
}
