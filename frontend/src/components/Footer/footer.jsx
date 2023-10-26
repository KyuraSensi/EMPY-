import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
  return (
    <>
     
      <footer className="footer" style={{ marginTop: "20px" }}>
        <div className="footer-flex">
          <div>©EMPTY.COM. All rights reserved.</div>
          <p>|</p>
          <div>
            <Link to="/suggestion">
              <button className="box">Suggestions</button>
            </Link>
          </div>
          <p>|</p>
          <div>
            <Link to="/">
              <button className="box">Signup</button>
            </Link>
          </div>
        </div>

        <div className="footerD">
          <div>
            <h3>Contacts:</h3>
            <p>Calls: (078)-045-0159</p>
            <p>WhatsApp: (072)-851-1932</p>
            <p>IG: Kyu</p>
            <p>Facebook: Kyu-sensei</p>
          </div>
          <div>
            <h3>Sponsers</h3>
            <p>Bitcoin.co.za</p>
            <p>Cantel Canvas ZA</p>
            <p>Educational World Wide</p>
          </div>
          <div>
            <h3>Branches:</h3>
            <p>72 Springfield street</p>
            <p>85 Winchester street</p>
            <p>95 Susana street</p>
          </div>
          <div>
            <h3>In Partnership with:</h3>
            <p>The Minister Of Education</p>
            <p>Oxford University</p>
            <p>Wits University</p>
            <p>Sanlam</p>
            <p>SAAAD</p>
          </div>
        </div>
      </footer>
    
    </>
  );
}

export default Footer