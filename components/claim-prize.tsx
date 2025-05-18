"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, Trophy, AlertCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface ClaimPrizeProps {
  winningNumbers: number[]
  isActive: boolean
}

// Mock data
const mockWinningTickets = [
  {
    id: 4,
    round: 0,
    numbers: [[7, 13, 19, 28, 35, 41, 46]],
    matches: 4,
    prize: 100,
    claimed: false,
  },
]

export default function ClaimPrize({ winningNumbers, isActive }: ClaimPrizeProps) {
  const [loading, setLoading] = useState(false)
  const [claimed, setClaimed] = useState<number[]>([])
  const { toast } = useToast()

  const handleClaim = (ticketId: number) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setClaimed([...claimed, ticketId])
      toast({
        title: "Prize Claimed!",
        description: "Your LUCKY tokens have been added to your wallet",
      })
    }, 2000)
  }

  if (!isActive) {
    return (
      <Card className="bg-white border-gray-200">
        <CardHeader>
          <CardTitle>Claim Prize</CardTitle>
          <CardDescription>Check if you've won and claim your prizes</CardDescription>
        </CardHeader>
        <CardContent className="text-center py-12">
          <AlertCircle className="h-12 w-12 mx-auto mb-4 text-amber-500 opacity-70" />
          <p className="text-lg font-medium mb-2 text-gray-800">Lottery is still active</p>
          <p className="text-gray-600">
            The current lottery round is still in progress. <br />
            Winning numbers will be drawn after the lottery ends.
          </p>
        </CardContent>
      </Card>
    )
  }

  if (winningNumbers.length === 0) {
    return (
      <Card className="bg-white border-gray-200">
        <CardHeader>
          <CardTitle>Claim Prize</CardTitle>
          <CardDescription>Check if you've won and claim your prizes</CardDescription>
        </CardHeader>
        <CardContent className="text-center py-12">
          <AlertCircle className="h-12 w-12 mx-auto mb-4 text-amber-500 opacity-70" />
          <p className="text-lg font-medium mb-2 text-gray-800">Winning numbers not drawn yet</p>
          <p className="text-gray-600">
            The lottery has ended, but winning numbers haven't been drawn yet. <br />
            Please check back later.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <CardTitle>Claim Prize</CardTitle>
        <CardDescription>Check if you've won and claim your prizes</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
          <p className="text-sm text-gray-600 mb-2">Winning Numbers</p>
          <div className="flex flex-wrap gap-2">
            {winningNumbers.length > 0 ? (
              winningNumbers.map((num, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center font-bold text-lg text-white"
                >
                  {num}
                </div>
              ))
            ) : (
              <p className="text-gray-500">No winning numbers drawn yet</p>
            )}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex items-center mb-4">
            <Trophy className="h-5 w-5 text-amber-500 mr-2" />
            <h3 className="font-medium text-gray-800">Your Winning Tickets</h3>
          </div>

          {mockWinningTickets.length > 0 ? (
            <div className="space-y-4">
              {mockWinningTickets.map((ticket) => (
                <div key={ticket.id} className="bg-white rounded-lg p-4 border-l-4 border-green-500 shadow-sm">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-800">Ticket #{ticket.id}</span>
                    </div>
                    <Badge className="bg-green-100 text-green-700">{ticket.matches} Matches</Badge>
                  </div>

                  <div className="mb-3">
                    <div className="text-xs text-gray-500 mb-2">Your Numbers</div>
                    <div className="flex flex-wrap gap-2">
                      {ticket.numbers[0].map((num, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center font-bold text-sm text-white"
                        >
                          {num}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-lg font-bold text-green-600">Prize: {ticket.prize} LUCKY</div>
                    {claimed.includes(ticket.id) ? (
                      <Badge variant="outline" className="bg-gray-100 text-gray-500">
                        Claimed
                      </Badge>
                    ) : (
                      <Button
                        size="sm"
                        onClick={() => handleClaim(ticket.id)}
                        disabled={loading}
                        className="bg-green-600 hover:bg-green-700"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Claiming...
                          </>
                        ) : (
                          "Claim Prize"
                        )}
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <p>You don't have any winning tickets for this round</p>
              <p className="text-sm mt-2">Better luck next time!</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
