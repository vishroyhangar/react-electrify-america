import React, { useState } from "react";
import '../sass/Topbar.scss';
import Logo from '../image/logo-normal.png';

const Topbar = () => {
    const [isMenuClicked, setMenuClick] = useState(false);
    const [menuVisible, setMenuVisible] = useState('');


    /**
     * Button event for menu.
     * check if menuBtn is click and toggles the state
     */
    const btnMenuClick = () => {
        if(!isMenuClicked) {
            setMenuVisible('topbar__container__menu-center--menu-visible');
        } else {
            setMenuVisible('');
        }

        setMenuClick(!isMenuClicked);
    }

    

    return(
        <div className="topbar">
            <div className="topbar__container">
                <div className="topbar__container__menu-left">
                    <div className="menu-left__logo">
                        <a href="/">
                            <img src={Logo} alt="" />
                        </a>
                    </div>
                </div>


                <div className={`topbar__container__menu-center ${menuVisible}`}>
                    <nav className="menu-center__list-left">
                        <a href="">
                            Locate a charge
                        </a>

                        <a href="">How it works</a>

                        <a href="">Pricing</a>

                        <a href="">Mobile app</a>
                    </nav>

                    <nav className="menu-center__list-right">
                        <a href="">Home products</a>

                        <a href="">Commercial solutions</a>
                    </nav>
                </div>


                <div className="topbar__container__menu-right">
                    <nav className="menu-right__list">
                        <span className="material-icons js-btn-search">
                            search
                        </span>

                        <span className="material-icons js-btn-menu" onClick={btnMenuClick}>
                            menu
                        </span>
                    </nav>
                </div>
            </div>
        </div>
    )
}


export default Topbar;