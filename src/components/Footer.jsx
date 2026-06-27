import { Link } from "react-router-dom";
import {
    LuInstagram,
    LuFacebook,
    LuTwitter,
    LuMapPin,
    LuMail,
} from "react-icons/lu";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <h2 className="footer__logo">AUREN</h2>

                        <p className="footer__description">
                            Timeless essentials designed for modern everyday
                            living.
                        </p>
                    </div>

                    <div className="footer__links">
                        <h3 className="footer__heading">Shop</h3>

                        <Link to="/" className="footer__link">
                            T-Shirts
                        </Link>
                        <Link to="/" className="footer__link">
                            Hoodies
                        </Link>
                        <Link to="/" className="footer__link">
                            Sweatshirts
                        </Link>
                        <Link to="/" className="footer__link">
                            Accessories
                        </Link>
                    </div>

                    <div className="footer__links">
                        <h3 className="footer__heading">Company</h3>

                        <Link to="/" className="footer__link">
                            About
                        </Link>
                        <Link to="/" className="footer__link">
                            Contact
                        </Link>
                        <Link to="/" className="footer__link">
                            FAQ
                        </Link>
                    </div>

                    <div className="footer__links">
                        <h3 className="footer__heading">Follow Us</h3>

                        <a href="#">
                            <LuInstagram />
                            Instagram
                        </a>

                        <a href="#">
                            <LuFacebook />
                            Facebook
                        </a>

                        <a href="#">
                            <LuTwitter />X
                        </a>
                    </div>
                </div>

                <div className="footer__bottom">
                    <p>© 2026 Auren. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
