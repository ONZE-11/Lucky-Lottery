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

export default function LotteryApp() {
  const [connected, setConnected] = useState(false)
  const [account, setAccount] = useState("")
  const [currentPage, setCurrentPage] = useState("home")
  const [lotteryData, setLotteryData] = useState({
    round: 1,
    startTime: new Date().getTime(),
    endTime: new Date().getTime() + 7 * 24 * 60 * 60 * 1000, // 7 days from now
    ticketPriceUSDT: 1,
    ticketPriceLUCKY: 1,
    isActive: true,
    winningNumbers: [] as number[],
  })
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

            <div className="flex justify-between items-center mb-6 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <div>
                <p className="text-gray-500 dark:text-gray-400">Connected Account</p>
                <p className="font-medium text-gray-800 dark:text-gray-200">{account}</p>
              </div>
              <div className="flex gap-4">
                <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 border border-blue-100 dark:border-blue-800">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">USDT Balance</p>
                  <p className="font-bold text-amber-600 dark:text-amber-400">{balances.usdt} USDT</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/30 rounded-lg p-3 border border-green-100 dark:border-green-800">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">LUCKY Balance</p>
                  <p className="font-bold text-green-600 dark:text-green-400">{balances.lucky} LUCKY</p>
                </div>
              </div>
            </div>

            <Tabs defaultValue="buy" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="buy">Buy Tickets</TabsTrigger>
                <TabsTrigger value="mytickets">My Tickets</TabsTrigger>
                <TabsTrigger value="convert">Token Converter</TabsTrigger>
                <TabsTrigger value="claim">Claim Prize</TabsTrigger>
              </TabsList>
              <TabsContent value="buy">
                <BuyTickets
                  ticketPriceUSDT={lotteryData.ticketPriceUSDT}
                  ticketPriceLUCKY={lotteryData.ticketPriceLUCKY}
                  usdtBalance={balances.usdt}
                  luckyBalance={balances.lucky}
                />
              </TabsContent>
              <TabsContent value="mytickets">
                <MyTickets />
              </TabsContent>
              <TabsContent value="convert">
                <TokenConverter usdtBalance={balances.usdt} luckyBalance={balances.lucky} />
              </TabsContent>
              <TabsContent value="claim">
                <ClaimPrize winningNumbers={lotteryData.winningNumbers} isActive={!lotteryData.isActive} />
              </TabsContent>
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
      <div className="container mx-auto px-4 py-8 max-w-6xl">{renderPage()}</div>
    </div>
  )
}
