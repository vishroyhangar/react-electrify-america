import React from 'react';
import '../sass/About.scss';

export default function About() {
    return (
        <section className="section-about">
            <div className="section-about__image"></div>

            <div className="section-about__details header__details">
                <a href="/">
                    <h3>
                        ABOUT US
                        <span className="material-icons">arrow_forward</span>
                    </h3>
                </a>

                <h1>
                    We're leading the charge of fast charging
                </h1>

                <p>
                    We’re building out a convenient, reliable, customer-centric network of electric vehicle chargers nationwide—at workplaces, in communities, and on highways.
                </p>
            </div>

        </section>
    )
}
