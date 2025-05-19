function MyTickets({ tickets, isActive, winningNumber }) {
  return (
    <div className="my-tickets" id="tickets">
      <h2>My Tickets</h2>

      {tickets.length > 0 ? (
        <div className="tickets-container">
          <div className="tickets-header">
            <div className="tickets-count">You have {tickets.length} tickets</div>
            {!isActive && winningNumber && (
              <div className="winning-number">
                Winning Number: <span className="highlight">{winningNumber}</span>
              </div>
            )}
          </div>

          <div className="ticket-grid">
            {tickets.map((ticket, index) => (
              <div key={index} className={`ticket-item ${!isActive && ticket === winningNumber ? "winning" : ""}`}>
                {ticket}
                {!isActive && ticket === winningNumber && <div className="winning-badge">Winner!</div>}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="no-tickets">
          <div className="no-tickets-icon">🎟️</div>
          <p>You don't have any tickets for this round</p>
          <p className="no-tickets-cta">Buy tickets to enter the lottery!</p>
        </div>
      )}
    </div>
  )
}

export default MyTickets
