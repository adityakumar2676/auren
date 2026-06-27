import React from "react";
import { LuLeaf, LuGem, LuShieldCheck, LuChevronDown } from "react-icons/lu";
import HeroImage from "../assets/model-img.png";
import BannerImage from "../assets/banner.png";

function Hero() {
    return (
        <section className="hero" id="home">
            <div className="hero__inner">
                <div className="hero__content">
                    <span className="hero__badge">
                        <span className="hero__badge-dot"></span>
                        Timeless Essentials
                    </span>

                    <h1 className="hero__title">
                        Elevated Clothing For
                        <span className="accent"> Everyday Life</span>
                    </h1>

                    <p className="hero__description">
                        Minimal design. Premium fabrics. Built to last.
                    </p>

                    <div className="hero__actions">
                        <a href="#" className="btn btn-primary">
                            Shop Collection
                        </a>

                        <a href="#" className="btn btn-secondary">
                            Explore Now
                        </a>
                    </div>

                    <div className="hero__meta">
                        <div className="hero__stat">
                            <LuLeaf className="hero__stat-icon" />
                            <span className="hero__stat-title">
                                Premium Fabrics
                            </span>
                        </div>

                        <div className="hero__stat">
                            <LuGem className="hero__stat-icon" />
                            <span className="hero__stat-title">
                                Minimal Design
                            </span>
                        </div>

                        <div className="hero__stat">
                            <LuShieldCheck className="hero__stat-icon" />
                            <span className="hero__stat-title">
                                Built to Last
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero__scroll">
                <span>Scroll Down</span>
                <LuChevronDown className="hero__scroll-icon" />
            </div>
        </section>
    );
}

export default Hero;
