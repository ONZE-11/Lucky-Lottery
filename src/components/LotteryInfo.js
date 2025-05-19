function LotteryInfo({ round, prizePool, ticketPrice, participants, timeLeft, isActive }) {
  return (
    <div className="lottery-info" id="lottery">
      <div className="lottery-header">
        <h2>Round #{round}</h2>
        <div className="lottery-status">
          {isActive ? <span className="status-active">Active</span> : <span className="status-ended">Drawing</span>}
        </div>
      </div>

      <div className="prize-pool">
        <div className="prize-amount">{prizePool.toFixed(2)} ETH</div>
        <div className="prize-label">Prize Pool</div>
      </div>

      <div className="lottery-details">
        <div className="detail-item">
          <div className="detail-icon">💰</div>
          <div className="detail-value">{ticketPrice} ETH</div>
          <div className="detail-label">Ticket Price</div>
        </div>

        <div className="detail-item">
          <div className="detail-icon">👥</div>
          <div className="detail-value">{participants}</div>
          <div className="detail-label">Participants</div>
        </div>
      </div>

      {isActive && (
        <div className="countdown">
          <div className="countdown-label">Drawing in:</div>
          <div className="countdown-timer">
            <div className="time-block">
              <div className="time-value">{timeLeft.hours.toString().padStart(2, "0")}</div>
              <div className="time-unit">Hours</div>
            </div>
            <div className="time-separator">:</div>
            <div className="time-block">
              <div className="time-value">{timeLeft.minutes.toString().padStart(2, "0")}</div>
              <div className="time-unit">Minutes</div>
            </div>
            <div className="time-separator">:</div>
            <div className="time-block">
              <div className="time-value">{timeLeft.seconds.toString().padStart(2, "0")}</div>
              <div className="time-unit">Seconds</div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default LotteryInfo
