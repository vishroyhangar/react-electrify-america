import React from 'react';
import '../sass/Card.scss';


const Card = props => {
    return (
        <a className="card__link" href={props.link}>
            <div className={`card ${props.variation}`}>
                <div className={`card__image ${props.variation === 'card--small' ? 'card__image--small' : ''}`}>
                    <img src={props.image} />
                </div>

                <div className="card__text-content">
                    <h3>
                        {props.title} <span className="material-icons">arrow_forward</span>
                    </h3>

                    <p>
                        {props.text}
                    </p>
                </div>
            </div>
        </a>
    )
}


export default Card;