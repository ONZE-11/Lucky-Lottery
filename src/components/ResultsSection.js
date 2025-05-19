function ResultsSection({ userTickets, isActive, winners }) {
  return (
    <div className="results-section">
      <div id="tickets" className="card tickets-card">
        <h2 className="card-title">Your Tickets</h2>

        {userTickets.length > 0 ? (
          <div className="ticket-list">
            {userTickets.map((ticket, index) => (
              <div key={index} className="ticket">
                #{ticket}
              </div>
            ))}
          </div>
        ) : (
          <p className="no-tickets">You don't have any tickets yet!</p>
        )}
      </div>

      <div id="history" className="card history-card">
        <h2 className="card-title">Previous Winners</h2>

        <table className="winners-table">
          <thead>
            <tr>
              <th>Round</th>
              <th>Winner</th>
              <th>Prize</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {winners.map((winner, index) => (
              <tr key={index}>
                <td>#{winner.round}</td>
                <td>{winner.address}</td>
                <td>{winner.prize.toFixed(2)} ETH</td>
                <td>{winner.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ResultsSection
