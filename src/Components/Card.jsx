import React from 'react';
import '../sass/Card.scss';


const Card = ({link, variation, image, title, text}) => {
    return (
        <a className="card__link" href={link}>
            <div className={`card ${variation}`}>
                <div className={`card__image ${variation === 'card--small' ? 'card__image--small' : ''}`}>
                    <img src={image} />
                </div>

                <div className="card__text-content">
                    <h3>
                        {title} <span className="material-icons">arrow_forward</span>
                    </h3>

                    <p>
                        {text}
                    </p>
                </div>
            </div>
        </a>
    )
}


export default Card;