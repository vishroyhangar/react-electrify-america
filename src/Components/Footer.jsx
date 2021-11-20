import React from 'react';
import '../sass/Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <nav className="footer__nav">
                <ul className="footer__nav-list">
                    <li>
                        <a href="/">© 2021 Electrify America</a>
                    </li>

                    <li>
                        <a href="/">
                            Privacy
                        </a>
                    </li>

                    <li>
                        <a href="/">
                            Terms of use
                        </a>
                    </li>

                    <li>
                        <a href="/">
                            Social Media House Rules 
                        </a>
                    </li>

                    <li>
                        <a href="/">
                            Support <span>1-833-632-2778</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer;