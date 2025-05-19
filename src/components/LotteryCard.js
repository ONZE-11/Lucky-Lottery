function LotteryCard({ prize, ticketPrice, participants, timeRemaining, isActive, round }) {
  return (
    <div className="card lottery-card">
      <h2 className="card-title">Current Lottery Round #{round}</h2>

      <div className="prize-display">
        <div className="prize-amount">{prize.toFixed(2)} ETH</div>
        <div className="prize-label">Prize Pool</div>
      </div>

      <div className="lottery-info">
        <div className="info-item">
          <div className="info-value">{ticketPrice} ETH</div>
          <div className="info-label">Ticket Price</div>
        </div>

        <div className="info-item">
          <div className="info-value">{participants}</div>
          <div className="info-label">Participants</div>
        </div>
      </div>

      {isActive ? (
        <div className="timer">
          <div className="timer-label">Time Remaining:</div>
          <div className="timer-display">
            <span className="time-unit">{timeRemaining.hours.toString().padStart(2, "0")}</span>:
            <span className="time-unit">{timeRemaining.minutes.toString().padStart(2, "0")}</span>:
            <span className="time-unit">{timeRemaining.seconds.toString().padStart(2, "0")}</span>
          </div>
        </div>
      ) : (
        <div className="lottery-ended">Drawing in progress...</div>
      )}
    </div>
  )
}

export default LotteryCard
