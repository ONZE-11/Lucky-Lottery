"use client"

import { useState, useEffect } from "react"
import "./App.css"
import Header from "./components/Header"
import LotteryInfo from "./components/LotteryInfo"
import TicketPurchase from "./components/TicketPurchase"
import MyTickets from "./components/MyTickets"
import PreviousDraws from "./components/PreviousDraws"
import Footer from "./components/Footer"

function App() {
  // Lottery state
  const [lottery, setLottery] = useState({
    round: 7,
    prizePool: 1250,
    ticketPrice: 0.01,
    participants: 125,
    endTime: new Date(Date.now() + 24 * 60 * 60 * 1000),
    isActive: true,
    winningNumber: null,
  })

  // User state
  const [user, setUser] = useState({
    address: "0x7F5abc123...",
    balance: 5.5,
    tickets: [],
  })

  // Timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Previous draws
  const [previousDraws] = useState([
    { round: 6, winningNumber: "123456", winner: "0x8F3def456...", prize: 980, date: "2023-05-15" },
    { round: 5, winningNumber: "654321", winner: "0x2A9bcd789...", prize: 820, date: "2023-05-08" },
    { round: 4, winningNumber: "789012", winner: "0x1E4fgh012...", prize: 750, date: "2023-05-01" },
  ])

  // Update timer
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date()
      const difference = lottery.endTime - now

      if (difference <= 0) {
        clearInterval(timer)
        setLottery((prev) => ({ ...prev, isActive: false }))
        return
      }

      setTimeLeft({
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [lottery.endTime])

  // Buy tickets function
  const buyTickets = (quantity) => {
    if (!lottery.isActive) return

    // Generate random ticket numbers
    const newTickets = Array.from({ length: quantity }, () =>
      Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(6, "0"),
    )

    // Update state
    setUser((prev) => ({
      ...prev,
      balance: prev.balance - quantity * lottery.ticketPrice,
      tickets: [...prev.tickets, ...newTickets],
    }))

    setLottery((prev) => ({
      ...prev,
      prizePool: prev.prizePool + quantity * lottery.ticketPrice,
      participants: prev.participants + quantity,
    }))
  }

  return (
    <div className="app">
      <Header address={user.address} balance={user.balance} />

      <main className="main">
        <div className="hero">
          <h1>Lucky Lottery v7</h1>
          <p>Your chance to win big with blockchain technology</p>
        </div>

        <div className="container">
          <div className="lottery-section">
            <LotteryInfo
              round={lottery.round}
              prizePool={lottery.prizePool}
              ticketPrice={lottery.ticketPrice}
              participants={lottery.participants}
              timeLeft={timeLeft}
              isActive={lottery.isActive}
            />

            <TicketPurchase
              buyTickets={buyTickets}
              ticketPrice={lottery.ticketPrice}
              isActive={lottery.isActive}
              userBalance={user.balance}
            />
          </div>

          <MyTickets tickets={user.tickets} isActive={lottery.isActive} winningNumber={lottery.winningNumber} />

          <PreviousDraws draws={previousDraws} />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
