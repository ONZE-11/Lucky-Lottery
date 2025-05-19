import { HistoryIcon } from "lucide-react"

function LotteryHistory({ history }) {
  return (
    <div className="lottery-history-section" id="history">
      <div className="history-header">
        <HistoryIcon size={24} />
        <h2>Previous Winners</h2>
      </div>

      <div className="history-table-container">
        <table className="history-table">
          <thead>
            <tr>
              <th>Round</th>
              <th>Winner</th>
              <th>Prize (ETH)</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {history.map((item, index) => (
              <tr key={index}>
                <td>#{item.round}</td>
                <td>
                  {item.winner.slice(0, 6)}...{item.winner.slice(-4)}
                </td>
                <td>{item.prize.toFixed(2)} ETH</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LotteryHistory
