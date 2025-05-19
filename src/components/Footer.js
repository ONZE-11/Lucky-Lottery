function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <div className="logo-icon">🎮</div>
            <h3>Lucky Lottery</h3>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h4>Links</h4>
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
            </div>

            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
                <li>
                  <a href="#terms">Terms</a>
                </li>
                <li>
                  <a href="#privacy">Privacy</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Social</h4>
              <ul>
                <li>
                  <a href="#twitter">Twitter</a>
                </li>
                <li>
                  <a href="#discord">Discord</a>
                </li>
                <li>
                  <a href="#telegram">Telegram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2023 Lucky Lottery v7. All rights reserved.</p>
          <p>A decentralized lottery application powered by blockchain technology.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
