"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Ticket, Clock, CheckCircle2 } from "lucide-react"

// Mock data
const mockTickets = [
  {
    id: 1,
    round: 1,
    numbers: [[7, 12, 23, 34, 38, 42, 49]],
    purchaseDate: "2023-05-15",
    status: "active",
  },
  {
    id: 2,
    round: 1,
    numbers: [
      [3, 11, 22, 27, 33, 41, 45],
      [5, 16, 24, 31, 37, 43, 50],
    ],
    purchaseDate: "2023-05-16",
    status: "active",
  },
]

const pastTickets = [
  {
    id: 3,
    round: 0,
    numbers: [[2, 14, 25, 31, 36, 42, 47]],
    purchaseDate: "2023-05-01",
    status: "lost",
    matches: 2,
  },
  {
    id: 4,
    round: 0,
    numbers: [[7, 13, 19, 28, 35, 41, 46]],
    purchaseDate: "2023-05-02",
    status: "won",
    matches: 4,
    prize: 100,
  },
]

export default function MyTickets() {
  const [activeTab, setActiveTab] = useState("active")

  return (
    <Card className="bg-white border-gray-200">
      <CardHeader>
        <CardTitle>My Tickets</CardTitle>
        <CardDescription>View your active and past lottery tickets</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="active" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-2 mb-6">
            <TabsTrigger value="active">Active Tickets</TabsTrigger>
            <TabsTrigger value="past">Past Tickets</TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            {mockTickets.length > 0 ? (
              <div className="space-y-4">
                {mockTickets.map((ticket) => (
                  <div key={ticket.id} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <Ticket className="h-5 w-5 text-amber-500 mr-2" />
                        <span className="font-medium text-gray-800">Ticket #{ticket.id}</span>
                      </div>
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-200">Round #{ticket.round}</Badge>
                    </div>

                    <div className="space-y-3">
                      {ticket.numbers.map((row, idx) => (
                        <div
                          key={idx}
                          className="bg-white dark:bg-gray-800 rounded-md p-3 border border-gray-200 dark:border-gray-700"
                        >
                          <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Row #{idx + 1}</div>
                          <div className="flex flex-wrap gap-2">
                            {/* Sort the numbers before rendering them */}
                            {[...row]
                              .sort((a, b) => a - b)
                              .map((num, i) => (
                                <div
                                  key={i}
                                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                                    ticket.status === "won"
                                      ? "bg-gradient-to-br from-green-400 to-green-500 text-white"
                                      : "bg-gradient-to-br from-brand-400 to-brand-600 dark:from-brand-500 dark:to-brand-700 text-white shadow-md"
                                  }`}
                                >
                                  {num}
                                </div>
                              ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 text-sm text-gray-500 flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      Purchased on {ticket.purchaseDate}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Ticket className="h-12 w-12 mx-auto mb-4 opacity-30" />
                <p>You don't have any active tickets</p>
                <p className="text-sm mt-2">Purchase tickets to participate in the current lottery round</p>
              </div>
            )}
          </TabsContent>

          <TabsContent value="past">
            {pastTickets.length > 0 ? (
              <div className="space-y-4">
                {pastTickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className={`bg-gray-50 rounded-lg p-4 border ${
                      ticket.status === "won" ? "border-l-4 border-green-500" : "border-gray-200"
                    }`}
                  >
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <Ticket className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="font-medium text-gray-800">Ticket #{ticket.id}</span>
                      </div>
                      <Badge
                        className={
                          ticket.status === "won" ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-700"
                        }
                      >
                        Round #{ticket.round}
                      </Badge>
                    </div>

                    <div className="space-y-3">
                      {ticket.numbers.map((row, idx) => (
                        <div key={idx} className="bg-white rounded-md p-3 border border-gray-200">
                          <div className="flex justify-between mb-2">
                            <div className="text-xs text-gray-500">Row #{idx + 1}</div>
                            <div className="text-xs">
                              {ticket.status === "won" ? (
                                <span className="text-green-600">{ticket.matches} matches</span>
                              ) : (
                                <span className="text-gray-500">{ticket.matches} matches</span>
                              )}
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {row.map((num, i) => (
                              <div
                                key={i}
                                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                                  ticket.status === "won"
                                    ? "bg-gradient-to-br from-green-400 to-green-500 text-white"
                                    : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {num}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-3 flex justify-between items-center">
                      <div className="text-sm text-gray-500">Purchased on {ticket.purchaseDate}</div>
                      {ticket.status === "won" && (
                        <div className="flex items-center text-green-600 font-medium">
                          <CheckCircle2 className="h-4 w-4 mr-1" />
                          Won {ticket.prize} LUCKY
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Ticket className="h-12 w-12 mx-auto mb-4 opacity-30" />
                <p>You don't have any past tickets</p>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
