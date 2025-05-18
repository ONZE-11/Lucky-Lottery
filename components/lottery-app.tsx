"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import LotteryHeader from "./lottery-header"
import BuyTickets from "./buy-tickets"
import MyTickets from "./my-tickets"
import TokenConverter from "./token-converter"
import ClaimPrize from "./claim-prize"
import ConnectWallet from "./connect-wallet"
import { useToast } from "@/hooks/use-toast"
import Navbar from "./navbar"
import HomePage from "./pages/home-page"
import HowItWorks from "./pages/how-it-works"
import Stats from "./pages/stats"
import Winners from "./pages/winners"
import { motion, AnimatePresence } from "framer-motion"

export default function LotteryApp() {
  const [connected, setConnected] = useState(false)
  const [account, setAccount] = useState("")
  const [currentPage, setCurrentPage] = useState("home")
  // When setting up mock data for winning tickets, ensure the numbers are sorted
  const [lotteryData, setLotteryData] = useState({
    round: 1,
    startTime: new Date().getTime(),
    endTime: new Date().getTime() + 7 * 24 * 60 * 60 * 1000, // 7 days from now
    ticketPriceUSDT: 1,
    ticketPriceLUCKY: 1,
    isActive: true,
    // Sort the winning numbers if any are provided
    winningNumbers: [] as number[],
  })

  // If you add mock winning numbers later, make sure to sort them:
  // Example: setLotteryData(prev => ({...prev, winningNumbers: [7, 12, 23, 34, 38, 42, 49].sort((a, b) => a - b)}))
  const [balances, setBalances] = useState({
    usdt: 0,
    lucky: 0,
  })
  const { toast } = useToast()

  const handleConnect = () => {
    // Mock connection
    setConnected(true)
    setAccount("0x1234...5678")
    setBalances({
      usdt: 100,
      lucky: 50,
    })
    toast({
      title: "Wallet Connected",
      description: "Successfully connected to your wallet",
    })
  }

  const renderPage = () => {
    if (
      !connected &&
      currentPage !== "home" &&
      currentPage !== "how-it-works" &&
      currentPage !== "stats" &&
      currentPage !== "winners"
    ) {
      return <ConnectWallet onConnect={handleConnect} />
    }

    switch (currentPage) {
      case "home":
        return <HomePage onConnect={connected ? undefined : handleConnect} />
      case "how-it-works":
        return <HowItWorks />
      case "stats":
        return <Stats />
      case "winners":
        return <Winners />
      case "play":
        return (
          <>
            <LotteryHeader round={lotteryData.round} endTime={lotteryData.endTime} isActive={lotteryData.isActive} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-card mb-6 rounded-xl p-4 shadow-sm"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Connected Account</p>
                  <p className="font-medium text-gray-800 dark:text-gray-200">{account}</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <div className="bg-blue-50/80 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-100 dark:border-blue-800/50 flex-1">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">USDT Balance</p>
                    <p className="font-bold text-amber-600 dark:text-amber-400">{balances.usdt} USDT</p>
                  </div>
                  <div className="bg-green-50/80 dark:bg-green-900/20 rounded-lg p-3 border border-green-100 dark:border-green-800/50 flex-1">
                    <p className="text-gray-500 dark:text-gray-400 text-sm">LUCKY Balance</p>
                    <p className="font-bold text-green-600 dark:text-green-400">{balances.lucky} LUCKY</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <Tabs defaultValue="buy" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8 bg-gray-100/80 dark:bg-gray-800/80 backdrop-blur-sm p-1 rounded-xl">
                <TabsTrigger
                  value="buy"
                  className="rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
                >
                  Buy Tickets
                </TabsTrigger>
                <TabsTrigger
                  value="mytickets"
                  className="rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
                >
                  My Tickets
                </TabsTrigger>
                <TabsTrigger
                  value="convert"
                  className="rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
                >
                  Token Converter
                </TabsTrigger>
                <TabsTrigger
                  value="claim"
                  className="rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700"
                >
                  Claim Prize
                </TabsTrigger>
              </TabsList>
              <AnimatePresence mode="wait">
                <TabsContent value="buy" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <BuyTickets
                      ticketPriceUSDT={lotteryData.ticketPriceUSDT}
                      ticketPriceLUCKY={lotteryData.ticketPriceLUCKY}
                      usdtBalance={balances.usdt}
                      luckyBalance={balances.lucky}
                    />
                  </motion.div>
                </TabsContent>
                <TabsContent value="mytickets" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MyTickets />
                  </motion.div>
                </TabsContent>
                <TabsContent value="convert" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TokenConverter usdtBalance={balances.usdt} luckyBalance={balances.lucky} />
                  </motion.div>
                </TabsContent>
                <TabsContent value="claim" className="mt-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ClaimPrize winningNumbers={lotteryData.winningNumbers} isActive={!lotteryData.isActive} />
                  </motion.div>
                </TabsContent>
              </AnimatePresence>
            </Tabs>
          </>
        )
      default:
        return <HomePage onConnect={connected ? undefined : handleConnect} />
    }
  }

  return (
    <div className="min-h-screen text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} connected={connected} />
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
