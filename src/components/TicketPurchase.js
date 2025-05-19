"use client"

import { useState } from "react"

function TicketPurchase({ buyTickets, ticketPrice, isActive, userBalance }) {
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
    <div className="ticket-purchase">
      <h2>Buy Tickets</h2>

      <div className="ticket-selection">
        <button className="quantity-button decrease" onClick={decreaseQuantity} disabled={quantity <= 1}>
          -
        </button>

        <div className="ticket-quantity">
          <span className="quantity-value">{quantity}</span>
          <span className="quantity-label">Tickets</span>
        </div>

        <button className="quantity-button increase" onClick={increaseQuantity}>
          +
        </button>
      </div>

      <div className="purchase-summary">
        <div className="summary-row">
          <div className="summary-label">Price per ticket:</div>
          <div className="summary-value">{ticketPrice} ETH</div>
        </div>

        <div className="summary-row total">
          <div className="summary-label">Total cost:</div>
          <div className="summary-value">{totalCost.toFixed(3)} ETH</div>
        </div>
      </div>

      <button className="purchase-button" onClick={handlePurchase} disabled={!isActive || !canAfford}>
        {!isActive ? "Lottery Closed" : !canAfford ? "Insufficient Balance" : "Buy Now"}
      </button>

      <div className="purchase-note">Each ticket gives you a chance to win the entire prize pool!</div>
    </div>
  )
}

export default TicketPurchase
