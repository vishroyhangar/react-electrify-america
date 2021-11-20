import React from 'react';
import '../sass/Card.scss';

export default function CardDownload(props) {
    return (
        <div className="card">
            <div className="card__text-content">
                <h1>
                    {props.title} <span className="material-icons">arrow_forward</span>
                </h1>

                <p>
                    {props.text}
                </p>
            </div>

            <div className="card__text-content__buttons">
                <img src="https://www.electrifyamerica.com/img/app-store-logo.e2326c69.png" alt="Apple store" />

                <img src="https://www.electrifyamerica.com/img/google-play-badge.6851e3a3.png" alt="Playstore" />
            </div>
        </div>
    )
}
