import React from 'react';
import '../sass/PreFooterLinks.scss';

const PreFooterLinks = ({value}) => {
    return(
        <div className="container__links__list-container">
            <nav className="container__links__list">
                {
                    value.map(item =>{
                        return(<a href="">
                            {item}
                        </a>
                        )
                    })
                }
            </nav>
        </div>
    )
}


export default PreFooterLinks;