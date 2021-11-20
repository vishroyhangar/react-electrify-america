import React from 'react';
import '../sass/Header.scss';

const Header = () => {
    return(
        <header className="header">
            <div className="header__details">
                <h1>
                    Find charging <em>fast</em>
                </h1>

                <p>
                    Explore the largest public fast charging network in the U.S. — letting you charge in as little as 30 minutes
                </p>

                <div className="header__details__input">
                    <form action="/">
                        <input type="text" placeholder="ENTER CITY OR ZIP"/>

                        <div className="header__details__input__btn-submit">
                            <span className="material-icons">
                                chevron_right
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    )
}


export default Header;