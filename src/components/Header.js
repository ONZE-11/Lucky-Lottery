function Header({ address, balance }) {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <div className="logo-icon">🎮</div>
          <h2>Lucky Lottery</h2>
        </div>

        <nav className="nav">
          <ul>
            <li>
              <a href="#lottery">Current Draw</a>
            </li>
            <li>
              <a href="#tickets">My Tickets</a>
            </li>
            <li>
              <a href="#history">History</a>
            </li>
          </ul>
        </nav>

        <div className="wallet">
          <div className="wallet-balance">{balance.toFixed(2)} ETH</div>
          <div className="wallet-address">{address}</div>
          <button className="connect-button">Connect</button>
        </div>
      </div>
    </header>
  )
}

export default Header
