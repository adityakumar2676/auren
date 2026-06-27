import { useState } from "react";

function Newsletter() {
    const [email, setEmail] = useState("");
    return (
        <section className="newsletter" id="newsletter">
            <div className="container">
                <div className="newsletter__content">
                    <span className="section-tag">Stay Connected</span>

                    <h2 className="section-title">Join the Auren Community</h2>

                    <p className="section-description">
                        Be the first to discover new collections, exclusive
                        offers, and style inspiration.
                    </p>

                    <form className="newsletter__form">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="newsletter__input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <button
                            type="submit"
                            className="btn btn-primary newsletter__button"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Newsletter;
