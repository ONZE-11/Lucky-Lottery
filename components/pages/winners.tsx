"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Calendar, Ticket } from "lucide-react"

export default function Winners() {
  // Mock data for winners
  const topWinners = [
    {
      address: "0x7a23...45df",
      prize: 10000,
      round: 12,
      date: "May 3, 2023",
      matches: 7,
      numbers: [3, 11, 22, 27, 33, 41, 45],
    },
    {
      address: "0x3f56...89ab",
      prize: 5000,
      round: 10,
      date: "Apr 19, 2023",
      matches: 6,
      numbers: [2, 14, 25, 31, 36, 42, 47],
    },
    {
      address: "0x9c12...67ef",
      prize: 5000,
      round: 9,
      date: "Apr 12, 2023",
      matches: 6,
      numbers: [5, 12, 18, 24, 37, 42, 49],
    },
  ]

  const recentWinners = [
    {
      address: "0x7a23...45df",
      prize: 10000,
      round: 12,
      date: "May 3, 2023",
      matches: 7,
    },
    {
      address: "0x2b45...78cd",
      prize: 2000,
      round: 12,
      date: "May 3, 2023",
      matches: 5,
    },
    {
      address: "0x8d34...12ef",
      prize: 500,
      round: 12,
      date: "May 3, 2023",
      matches: 4,
    },
    {
      address: "0x5f67...90ab",
      prize: 500,
      round: 12,
      date: "May 3, 2023",
      matches: 4,
    },
    {
      address: "0x1a23...45cd",
      prize: 100,
      round: 12,
      date: "May 3, 2023",
      matches: 3,
    },
    {
      address: "0x6e78...90fg",
      prize: 100,
      round: 12,
      date: "May 3, 2023",
      matches: 3,
    },
    {
      address: "0x4b56...78hi",
      prize: 100,
      round: 12,
      date: "May 3, 2023",
      matches: 3,
    },
    {
      address: "0x9c12...67jk",
      prize: 100,
      round: 12,
      date: "May 3, 2023",
      matches: 3,
    },
  ]

  return (
    <div className="space-y-12 py-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Winners Circle</h1>
        <p className="text-lg text-gray-600">
          Celebrate our lucky winners! Check out the top jackpot winners and recent prize recipients from our lottery
          draws.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Trophy className="h-6 w-6 text-amber-500 mr-2" />
          Top Jackpot Winners
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topWinners.map((winner, index) => (
            <Card key={index} className="bg-white border-gray-200 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-500"></div>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold">{winner.address}</CardTitle>
                  <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-200">{winner.matches} Matches</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="text-gray-500 text-sm flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Round #{winner.round}
                    </div>
                    <div className="text-gray-500 text-sm">{winner.date}</div>
                  </div>

                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                    <div className="text-sm text-gray-600 mb-2">Winning Numbers</div>
                    <div className="flex flex-wrap gap-2">
                      {winner.numbers.map((num, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center font-bold text-sm text-white"
                        >
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center">
                    <div className="text-sm text-gray-500">Prize Amount</div>
                    <div className="text-2xl font-bold text-amber-600">{winner.prize.toLocaleString()} LUCKY</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Ticket className="h-6 w-6 text-green-500 mr-2" />
          Recent Winners
        </h2>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Winner
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Prize
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Round
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Matches
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentWinners.map((winner, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{winner.address}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">
                      {winner.prize.toLocaleString()} LUCKY
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">#{winner.round}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{winner.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Badge
                        className={
                          winner.matches >= 6
                            ? "bg-amber-100 text-amber-700"
                            : winner.matches >= 5
                              ? "bg-green-100 text-green-700"
                              : winner.matches >= 4
                                ? "bg-blue-100 text-blue-700"
                                : "bg-gray-100 text-gray-700"
                        }
                      >
                        {winner.matches} Matches
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-xl border border-green-100">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Could You Be Next?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Every round creates new winners. Buy your tickets today for a chance to join our winners circle and win big
            prizes!
          </p>
          <div className="inline-block bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-3 rounded-lg font-medium hover:from-amber-600 hover:to-amber-700 transition-colors cursor-pointer">
            Play Lottery Now
          </div>
        </div>
      </section>
    </div>
  )
}
