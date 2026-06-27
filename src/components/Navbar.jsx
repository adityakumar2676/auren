import { LuSearch, LuShoppingCart, LuUser } from "react-icons/lu";

import { useState } from "react";

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="navbar">
            <div className="navbar__inner">
                <a href="#home" className="navbar__logo">
                    AUREN <span className="navbar__logo-dot"></span>
                </a>

                <nav className="navbar__nav">
                    <a href="#home" className="navbar__link active">
                        Home
                    </a>
                    <a href="#home" className="navbar__link active">
                        Shop
                    </a>
                    <a href="#home" className="navbar__link active">
                        Collections
                    </a>
                    <a href="#home" className="navbar__link active">
                        About
                    </a>
                    <a href="#home" className="navbar__link active">
                        Journal
                    </a>
                </nav>

                <div className="navbar__actions">
                    <button className="icon-btn">
                        <LuSearch />
                    </button>

                    <button className="icon-btn">
                        <LuUser />
                    </button>

                    <button className="icon-btn">
                        <LuShoppingCart />
                    </button>
                </div>

                <button
                    className={`navbar__hamburger ${isMenuOpen ? "open" : ""}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            <div className={`navbar__mobile-menu ${isMenuOpen ? "open" : ""}`}>
                <a
                    href="#home"
                    className="navbar__mobile-link"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Home
                </a>
                <a
                    href="#projects"
                    className="navbar__mobile-link"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Shop
                </a>
                <a
                    href="#skills"
                    className="navbar__mobile-link"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Collections
                </a>
                <a
                    href="#contact"
                    className="navbar__mobile-link"
                    onClick={() => setIsMenuOpen(false)}
                >
                    About
                </a>
                <a
                    href="#contact"
                    className="navbar__mobile-link"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Journal
                </a>

                <div
                    className="navbar__mobile-actions"
                    style={{ padding: "var(--space-4) var(--space-6)" }}
                >
                    <button className="icon-btn">
                        <LuSearch />
                    </button>

                    <button className="icon-btn">
                        <LuUser />
                    </button>

                    <button className="icon-btn">
                        <LuShoppingCart />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
