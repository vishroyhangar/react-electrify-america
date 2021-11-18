import React from 'react';
import './Card.scss';


const Card = ({image, title, text}) => {
    return (
        <div className='card--normal'>
            <div className="card__image">
                <img src={image} />
            </div>

            <div className="card__text-content">
                <h2>
                    {title}
                </h2>

                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}


export default Card;