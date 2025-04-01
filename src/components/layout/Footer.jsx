// Footer.js
import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../Home/assets/logo.svg";
import "../styles/footer.css"; // Import the CSS file for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faFacebook,
  faInstagram,
  faLinkedin,
  faTelegram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <div className="footer-logo-section">
            <img src={logoImage} alt="Dharitri Logo" width="200px" />
          </div>
          <div className="footer-social-section">
            <h4>
              <b>Follow Us</b>
            </h4>
            <a href="https://x.com/dharitri_block?s=11" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="https://www.facebook.com/share/1FcBi9D28q/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDiscord} />
            </a>
            <a href="https://t.me/+RnufS2rJnLgxNmVh" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="https://www.instagram.com/dharitri_blockchain" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div className="footer-links-section">
          <div>
            <div className="footer-column">
              <h4>
                <b>Individuals</b>
              </h4>
              <Link to="/Individuals/Started">Get Started</Link>
              <Link to="/Individuals/Rewa">The Rewa Token</Link>
              <Link to="/Individuals/Chain">On-chain 2FA</Link>
              <Link to="/About/careers">Staking</Link>
              <Link to="/Individuals/Staking">Sustainability</Link>
            </div>
            <div className="footer-column">
              <h4>
                <b>Products</b>
              </h4>
              <Link to="/help">Wallet</Link>
              <Link to="/community">DExchange</Link>
              <Link to="/terms">Bridge</Link>
              <Link to="/terms">Explorer</Link>
            </div>
          </div>
          <div>
            <div className="footer-column">
              <h4>
                <b>Developers</b>
              </h4>
              <Link to="/help">Builders Hub</Link>
              <Link to="/community">Build a dApp in 30 minutes</Link>
              <Link to="/terms">Tutorials</Link>
              <Link to="/help">Tools & Resources</Link>
              <Link to="/community">Releases</Link>
              <Link to="/terms">Tech Roadmap</Link>
            </div>
            <div className="footer-column">
              <h4>
                <b>Ecosystem</b>
              </h4>
              <Link to="/contact">Discover</Link>
              <Link to="/support">Grants</Link>
              <Link to="/contact">Projects</Link>
              <Link to="/support">Partners</Link>
              <Link to="/contact">Validators</Link>
              <Link to="/support">Service Providers</Link>
            </div>
          </div>
          <div>
            <div className="footer-column">
              <h4>
                <b>The Farmer</b>
              </h4>
              <Link to="/contact">Resources</Link>
              <Link to="/support">Programs</Link>
              <Link to="/contact">Training</Link>
              <Link to="/support">Community</Link>
            </div>
            <div className="footer-column">
              <h4>
                <b>Community</b>
              </h4>
              <Link to="/About/Dharitri">Events Calendar</Link>
              <Link to="/About/careers">Governance</Link>
              <Link to="/community/blog">Ambassador Program</Link>
              <Link to="/contact">FAQ</Link>
              <Link to="/support">Blog</Link>
            </div>
          </div>
          <div>
            <div className="footer-column">
              <h4>
                <b>Mother Earth</b>
              </h4>
              <Link to="/About/Dharitri"> Sustainability</Link>
              <Link to="/About/careers">Green initiatives</Link>
              <Link to="/community/blog">Impact</Link>
              <Link to="/community/blog">Projects</Link>
            </div>
            <div className="footer-column">
              <h4>
                <b>About</b>
              </h4>
              <Link to="/help">From Dharitri</Link>
              <Link to="/community">Media Kit</Link>
              <Link to="/terms">Careers</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dharitri Org. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
