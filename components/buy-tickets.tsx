"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import NumberSelector from "./number-selector"
import { motion } from "framer-motion"
import { Plus, Minus, CreditCard } from "lucide-react"

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

  // Update the updateTicketNumbers function to sort numbers
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

  // Add a function to handle buying tickets that shows sorted numbers
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

    // Sort each row of numbers before displaying confirmation
    const sortedTickets = ticketRows.map((row) => {
      const nonZeros = row.filter((n) => n > 0).sort((a, b) => a - b)
      return nonZeros
    })

    // Mock transaction
    toast({
      title: "Tickets Purchased!",
      description: `Successfully purchased ${ticketRows.length} ticket rows`,
    })

    // You could also update a state here to show the purchased tickets
    // For example: setPurchasedTickets(sortedTickets)
  }

  const totalCost =
    paymentMethod === "usdt" ? ticketRows.length * ticketPriceUSDT : ticketRows.length * ticketPriceLUCKY

  const hasEnoughBalance = paymentMethod === "usdt" ? usdtBalance >= totalCost : luckyBalance >= totalCost

  return (
    <Card className="glass-card overflow-hidden">
      <CardHeader>
        <CardTitle>Buy Lottery Tickets</CardTitle>
        <CardDescription className="dark:text-gray-400 transition-colors duration-300">
          Select 7 numbers between 1-50 for each ticket row
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="usdt" onValueChange={(value) => setPaymentMethod(value as "usdt" | "lucky")}>
          <TabsList className="grid grid-cols-2 mb-4 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm p-1 rounded-lg">
            <TabsTrigger
              value="usdt"
              className="rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
            >
              Pay with USDT
            </TabsTrigger>
            <TabsTrigger
              value="lucky"
              className="rounded-md data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
            >
              Pay with LUCKY
            </TabsTrigger>
          </TabsList>
          <TabsContent value="usdt">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-amber-50/80 dark:bg-amber-900/20 p-4 rounded-lg mb-6 border border-amber-100 dark:border-amber-800/50 transition-colors duration-300"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                Price per ticket row
              </p>
              <p className="text-xl font-bold text-amber-600 dark:text-amber-400 transition-colors duration-300">
                {ticketPriceUSDT} USDT
              </p>
            </motion.div>
          </TabsContent>
          <TabsContent value="lucky">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-green-50/80 dark:bg-green-900/20 p-4 rounded-lg mb-6 border border-green-100 dark:border-green-800/50 transition-colors duration-300"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
                Price per ticket row
              </p>
              <p className="text-xl font-bold text-green-600 dark:text-green-400 transition-colors duration-300">
                {ticketPriceLUCKY} LUCKY
              </p>
            </motion.div>
          </TabsContent>
        </Tabs>

        <div className="space-y-6">
          {ticketRows.map((row, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glass-card p-4 rounded-lg"
            >
              <div className="flex justify-between items-center mb-4">
                <Badge variant="outline" className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm">
                  Ticket Row #{index + 1}
                </Badge>
                {ticketRows.length > 1 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeTicketRow(index)}
                    className="text-red-500 dark:text-red-400 hover:text-red-600 dark:hover:text-red-300 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-300"
                  >
                    <Minus className="h-4 w-4 mr-1" /> Remove
                  </Button>
                )}
              </div>
              <NumberSelector selectedNumbers={row} onChange={(numbers) => updateTicketNumbers(index, numbers)} />
            </motion.div>
          ))}
        </div>

        {ticketRows.length < 10 && (
          <Button
            variant="outline"
            onClick={addTicketRow}
            className="w-full border-dashed border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-500 dark:text-gray-400 transition-colors duration-300"
          >
            <Plus className="h-4 w-4 mr-2" /> Add Another Ticket Row
          </Button>
        )}
      </CardContent>
      <CardFooter className="flex-col space-y-4">
        <div className="w-full glass-card p-4 rounded-lg flex flex-col sm:flex-row justify-between gap-4 transition-colors duration-300">
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
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full">
          <Button
            onClick={handleBuyTickets}
            className="w-full btn-primary py-6 text-lg rounded-xl"
            disabled={!hasEnoughBalance}
          >
            <CreditCard className="h-5 w-5 mr-2" /> Buy Tickets
          </Button>
        </motion.div>
        {!hasEnoughBalance && (
          <p className="text-red-500 dark:text-red-400 text-sm text-center transition-colors duration-300">
            Insufficient balance. Please add funds or reduce the number of tickets.
          </p>
        )}
      </CardFooter>
    </Card>
  )
}
