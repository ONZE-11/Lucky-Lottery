"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Ticket, Trophy, Users, TrendingUp, Calendar, Coins } from "lucide-react"

export default function Stats() {
  // Mock data
  const stats = {
    totalPlayers: "12,458",
    totalTickets: "87,921",
    totalPrizes: "342,500",
    averageJackpot: "8,750",
    currentRound: "14",
    luckyPrice: "1.05",
  }

  // Mock historical data
  const historicalRounds = [
    {
      round: 13,
      date: "May 10, 2023",
      tickets: 6842,
      winners: 128,
      prizesAwarded: 24500,
      winningNumbers: [7, 13, 19, 28, 35, 41, 46],
    },
    {
      round: 12,
      date: "May 3, 2023",
      tickets: 6215,
      winners: 112,
      prizesAwarded: 21800,
      winningNumbers: [3, 11, 22, 27, 33, 41, 45],
    },
    {
      round: 11,
      date: "Apr 26, 2023",
      tickets: 5987,
      winners: 105,
      prizesAwarded: 20200,
      winningNumbers: [5, 16, 24, 31, 37, 43, 50],
    },
    {
      round: 10,
      date: "Apr 19, 2023",
      tickets: 5521,
      winners: 98,
      prizesAwarded: 19100,
      winningNumbers: [2, 14, 25, 31, 36, 42, 47],
    },
  ]

  return (
    <div className="space-y-12 py-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Lottery Statistics</h1>
        <p className="text-lg text-gray-600">
          Explore the latest statistics and historical data from our lottery. See the numbers behind the game and track
          performance over time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-gray-500 font-normal flex items-center">
              <Users className="h-5 w-5 mr-2 text-blue-500" />
              Total Players
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalPlayers}</div>
            <p className="text-sm text-gray-500 mt-1">Active participants in the lottery</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-gray-500 font-normal flex items-center">
              <Ticket className="h-5 w-5 mr-2 text-amber-500" />
              Total Tickets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalTickets}</div>
            <p className="text-sm text-gray-500 mt-1">Tickets purchased across all rounds</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-gray-500 font-normal flex items-center">
              <Trophy className="h-5 w-5 mr-2 text-green-500" />
              Total Prizes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.totalPrizes} LUCKY</div>
            <p className="text-sm text-gray-500 mt-1">Total value of prizes awarded</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-gray-500 font-normal flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-purple-500" />
              Average Jackpot
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.averageJackpot} LUCKY</div>
            <p className="text-sm text-gray-500 mt-1">Average jackpot size per round</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-gray-500 font-normal flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-red-500" />
              Current Round
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">#{stats.currentRound}</div>
            <p className="text-sm text-gray-500 mt-1">Current active lottery round</p>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg text-gray-500 font-normal flex items-center">
              <Coins className="h-5 w-5 mr-2 text-blue-500" />
              LUCKY Price
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{stats.luckyPrice} USDT</div>
            <p className="text-sm text-gray-500 mt-1">Current price of LUCKY token</p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-6">Historical Rounds</h2>
        <div className="overflow-x-auto">
          <table className="w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Round
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tickets Sold
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Winners
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Prizes Awarded
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Winning Numbers
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {historicalRounds.map((round) => (
                <tr key={round.round} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">#{round.round}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{round.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {round.tickets.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{round.winners}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    {round.prizesAwarded.toLocaleString()} LUCKY
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                    <div className="flex flex-wrap gap-1">
                      {round.winningNumbers.map((num, i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-xs font-bold text-amber-700"
                        >
                          {num}
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle>Ticket Sales Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-500">Ticket sales chart would appear here</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white border-gray-200">
          <CardHeader>
            <CardTitle>Prize Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-gray-500">Prize distribution chart would appear here</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
