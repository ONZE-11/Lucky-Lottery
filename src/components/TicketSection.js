"use client"

import { useState } from "react"

function TicketSection({ buyTickets, ticketPrice, isActive, userBalance }) {
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => setQuantity((prev) => prev + 1)

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handlePurchase = () => {
    buyTickets(quantity)
    setQuantity(1)
  }

  const totalCost = quantity * ticketPrice
  const canAfford = userBalance >= totalCost

  return (
    <div className="card ticket-card">
      <h2 className="card-title">Buy Lottery Tickets</h2>

      <div className="ticket-controls">
        <button className="quantity-btn" onClick={decreaseQuantity} disabled={quantity <= 1}>
          -
        </button>

        <div className="ticket-quantity">{quantity}</div>

        <button className="quantity-btn" onClick={increaseQuantity}>
          +
        </button>
      </div>

      <div className="cost-display">
        <div className="cost-label">Total Cost:</div>
        <div className="cost-value">{totalCost.toFixed(3)} ETH</div>
      </div>

      <button className="buy-button" onClick={handlePurchase} disabled={!isActive || !canAfford}>
        {!isActive ? "Lottery Closed" : !canAfford ? "Insufficient Balance" : "Buy Tickets"}
      </button>

      <p className="ticket-note">Each ticket gives you a chance to win the entire prize pool!</p>
    </div>
  )
}

export default TicketSection
