import React from "react";
import BannerImage from "../assets/banner.png";

function Banner() {
    return (
        <section className="collection" id="collection">
            <div className="collection__inner">
                <div className="collection__content">
                    <span className="collection__badge">
                        <span className="collection__badge-dot"></span>
                        New Collection
                    </span>

                    <h1 className="collection__title">
                        Spring / <span className="accent">Summer 2026</span>
                    </h1>

                    <p className="collection__description">
                        Effortless style for the modern lifestyle.
                    </p>

                    <div className="collection__actions">
                        <a href="#" className="btn btn-primary">
                            Explore Collection
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Banner;
