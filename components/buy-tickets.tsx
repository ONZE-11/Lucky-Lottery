"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import NumberSelector from "./number-selector"

interface BuyTicketsProps {
  ticketPriceUSDT: number
  ticketPriceLUCKY: number
  usdtBalance: number
  luckyBalance: number
}

export default function BuyTickets({ ticketPriceUSDT, ticketPriceLUCKY, usdtBalance, luckyBalance }: BuyTicketsProps) {
  const [paymentMethod, setPaymentMethod] = useState<"usdt" | "lucky">("usdt")
  const [ticketRows, setTicketRows] = useState<number[][]>([Array(7).fill(0)])
  const { toast } = useToast()

  const addTicketRow = () => {
    if (ticketRows.length < 10) {
      setTicketRows([...ticketRows, Array(7).fill(0)])
    } else {
      toast({
        title: "Maximum Limit Reached",
        description: "You can only purchase up to 10 rows at once",
        variant: "destructive",
      })
    }
  }

  const removeTicketRow = (index: number) => {
    if (ticketRows.length > 1) {
      const newRows = [...ticketRows]
      newRows.splice(index, 1)
      setTicketRows(newRows)
    }
  }

  const updateTicketNumbers = (rowIndex: number, numbers: number[]) => {
    setTicketRows((prevRows) => {
      // Only update if the numbers are actually different
      if (JSON.stringify(prevRows[rowIndex]) === JSON.stringify(numbers)) {
        return prevRows
      }

      const newRows = [...prevRows]
      newRows[rowIndex] = numbers
      return newRows
    })
  }

  const handleBuyTickets = () => {
    // Check if all tickets have 7 numbers selected
    const isValid = ticketRows.every((row) => row.filter((num) => num > 0).length === 7)

    if (!isValid) {
      toast({
        title: "Invalid Selection",
        description: "Please select 7 numbers for each ticket row",
        variant: "destructive",
      })
      return
    }

    // Mock transaction
    toast({
      title: "Tickets Purchased!",
      description: `Successfully purchased ${ticketRows.length} ticket rows`,
    })
  }

  const totalCost =
    paymentMethod === "usdt" ? ticketRows.length * ticketPriceUSDT : ticketRows.length * ticketPriceLUCKY

  const hasEnoughBalance = paymentMethod === "usdt" ? usdtBalance >= totalCost : luckyBalance >= totalCost

  return (
    <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <CardHeader>
        <CardTitle>Buy Lottery Tickets</CardTitle>
        <CardDescription className="dark:text-gray-400 transition-colors duration-300">
          Select 7 numbers between 1-50 for each ticket row
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="usdt" onValueChange={(value) => setPaymentMethod(value as "usdt" | "lucky")}>
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="usdt">Pay with USDT</TabsTrigger>
            <TabsTrigger value="lucky">Pay with LUCKY</TabsTrigger>
          </TabsList>
          <TabsContent value="usdt">
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg mb-6 border border-amber-100 dark:border-amber-800 transition-colors duration-300">
              <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                Price per ticket row
              </p>
              <p className="text-xl font-bold text-amber-600 dark:text-amber-400 transition-colors duration-300">
                {ticketPriceUSDT} USDT
              </p>
            </div>
          </TabsContent>
          <TabsContent value="lucky">
            <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg mb-6 border border-green-100 dark:border-green-800 transition-colors duration-300">
              <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                Price per ticket row
              </p>
              <p className="text-xl font-bold text-green-600 dark:text-green-400 transition-colors duration-300">
                {ticketPriceLUCKY} LUCKY
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-6">
          {ticketRows.map((row, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700 transition-colors duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <Badge variant="outline" className="bg-white dark:bg-gray-800 transition-colors duration-300">
                  Ticket Row #{index + 1}
                </Badge>
                {ticketRows.length > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeTicketRow(index)}
                    className="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-300"
                  >
                    Remove
                  </Button>
                )}
              </div>
              <NumberSelector selectedNumbers={row} onChange={(numbers) => updateTicketNumbers(index, numbers)} />
            </div>
          ))}
        </div>

        {ticketRows.length < 10 && (
          <Button
            variant="outline"
            onClick={addTicketRow}
            className="w-full border-dashed border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-500 dark:text-gray-400 transition-colors duration-300"
          >
            + Add Another Ticket Row
          </Button>
        )}
      </CardContent>
      <CardFooter className="flex-col space-y-4">
        <div className="w-full bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg border border-gray-200 dark:border-gray-700 flex justify-between transition-colors duration-300">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">Total Cost</p>
            <p className="text-xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300">
              {totalCost}{" "}
              {paymentMethod === "usdt" ? (
                <span className="text-amber-600 dark:text-amber-400 transition-colors duration-300">USDT</span>
              ) : (
                <span className="text-green-600 dark:text-green-400 transition-colors duration-300">LUCKY</span>
              )}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">Your Balance</p>
            <p className="text-xl font-bold">
              {paymentMethod === "usdt" ? (
                <span
                  className={
                    usdtBalance >= totalCost ? "text-amber-600 dark:text-amber-400" : "text-red-500 dark:text-red-400"
                  }
                >
                  {usdtBalance} USDT
                </span>
              ) : (
                <span
                  className={
                    luckyBalance >= totalCost ? "text-green-600 dark:text-green-400" : "text-red-500 dark:text-red-400"
                  }
                >
                  {luckyBalance} LUCKY
                </span>
              )}
            </p>
          </div>
        </div>
        <Button
          onClick={handleBuyTickets}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
          disabled={!hasEnoughBalance}
        >
          Buy Tickets
        </Button>
        {!hasEnoughBalance && (
          <p className="text-red-500 dark:text-red-400 text-sm text-center transition-colors duration-300">
            Insufficient balance. Please add funds or reduce the number of tickets.
          </p>
        )}
      </CardFooter>
    </Card>
  )
}
