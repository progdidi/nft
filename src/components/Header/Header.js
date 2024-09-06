import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

import './header.scss';

//images
import logo from './images/logo.svg';

const Header = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [menuFixed, setMenuFixed] = useState('header');

    const fixingMenu = () => {
        if(window !== undefined) {
            let windowHeight = window.scrollY;
            windowHeight > 200 ? setMenuFixed('header fixed') : setMenuFixed('header');
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', fixingMenu);
    })


    return ( 
        <header className={menuFixed}>
            <div className="container-fluid">
                <div className="header__inner">
                <NavLink to="/" className="logo"><img src={logo} alt="" className="logo__img" /></NavLink>
                    <nav className={showMenu ? "menu active" : "menu"}>
                        <ul className="menu__list">
                            <li className="menu__list-item">
                                 <NavLink to="/market" className="menu__list-link">Marketplace</NavLink>
                              
                            </li>
                            <li className="menu__list-item">
                                <NavLink to="/rankings" className="menu__list-link">Rankings</NavLink>
                               
                            </li>
                            <li className="menu__list-item">
                                <NavLink to="/wallet" className="menu__list-link">Connect a wallet</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <button className="menu-btn" onClick={() => setShowMenu(!showMenu)}>
                        <span></span>
                        <span class="long-line"></span>
                        <span></span>
                    </button>



                    <button className="user-btn purple-btn">
                        <p className="user-btn__text">Sign Up</p>
                    </button>
                </div>
            </div>
        </header>
     );
}
 
export default Header;