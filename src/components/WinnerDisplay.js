import { TicketIcon, TrophyIcon } from "lucide-react"

function WinnerDisplay({ userTickets, winningTicket, isActive }) {
  return (
    <div className="winner-display-section" id="tickets">
      <h2>{isActive ? "Your Tickets" : "Winner Announcement"}</h2>

      {isActive ? (
        <div className="tickets-container">
          {userTickets.length > 0 ? (
            <div className="user-tickets">
              <div className="tickets-heading">
                <TicketIcon size={20} />
                <span>Your active tickets ({userTickets.length})</span>
              </div>
              <div className="ticket-list">
                {userTickets.map((ticket, index) => (
                  <div key={index} className="ticket-number">
                    #{ticket}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="no-tickets">
              <p>You don't have any tickets yet!</p>
              <p className="ticket-prompt">Buy tickets to enter the lottery.</p>
            </div>
          )}
        </div>
      ) : (
        <div className="winner-announcement">
          {winningTicket ? (
            <div className="winner-info">
              <TrophyIcon size={48} className="trophy-icon" />
              <h3>Winning Ticket: #{winningTicket}</h3>
              {userTickets.includes(winningTicket) ? (
                <div className="winner-message">
                  <h3>Congratulations! You won!</h3>
                  <p>The prize will be transferred to your wallet.</p>
                </div>
              ) : (
                <div className="loser-message">
                  <p>Better luck next time!</p>
                </div>
              )}
            </div>
          ) : (
            <div className="drawing-message">
              <p>Drawing the winning ticket...</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default WinnerDisplay
