import React, { useState } from "react";
import '../sass/Topbar.scss';
import SearchBar from './SearchBar';
import Logo from '../image/logo-normal.png';

const Topbar = () => {
    const [isMenuClicked, setMenuClick] = useState(false);
    const [menuVisible, setMenuVisible] = useState('');
    const [menuIcon, setMenuIcon] = useState('menu'); //used to change menu icon span

    const [isSearchClicked, setSearchClick] = useState(false);
    const [searchVisible, setSearchVisible] = useState('');


    /**
     * Button event for menu.
     * check if menuBtn is click and toggles the state
     */
    const btnMenuClick = () => {
        if(!isMenuClicked) {
            setMenuVisible('topbar__container__menu-center--menu-visible');
            setMenuIcon('close');
        } else {
            setMenuVisible('');
            setMenuIcon('menu');
        }

        setMenuClick(!isMenuClicked);
    }

    /**
     * Button event for search.
     * check if searchBtn is click and toggles the state
     * state is passed as prop to searchBar component
     */
    const btnSearchClick = event => {
        event.preventDefault();

        if (!isSearchClicked) {
            setSearchVisible('search-bar--visible');
        } else {
            setSearchVisible('');
        }

        setSearchClick(!isSearchClicked);
    }

    

    return(
        <div className="topbar">
            <div className="topbar__container">
                <SearchBar searchVisible={searchVisible} isBtnClicked={isSearchClicked} btnSearchEvent={btnSearchClick}/>


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
                        <span className="material-icons js-btn-search" onClick={btnSearchClick}>
                            search
                        </span>

                        <span className="material-icons js-btn-menu" onClick={btnMenuClick}>
                            {menuIcon}
                        </span>
                    </nav>
                </div>
            </div>
        </div>
    )
}


export default Topbar;