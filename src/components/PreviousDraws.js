function PreviousDraws({ draws }) {
  return (
    <div className="previous-draws" id="history">
      <h2>Previous Draws</h2>

      <div className="draws-table-container">
        <table className="draws-table">
          <thead>
            <tr>
              <th>Round</th>
              <th>Winning Number</th>
              <th>Winner</th>
              <th>Prize</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {draws.map((draw, index) => (
              <tr key={index}>
                <td>#{draw.round}</td>
                <td className="winning-number">{draw.winningNumber}</td>
                <td className="winner-address">{draw.winner}</td>
                <td className="prize-amount">{draw.prize.toFixed(2)} ETH</td>
                <td>{draw.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PreviousDraws
