import { NavLink } from 'react-router-dom';

import './header.scss';

//images
import logo from './images/logo.svg';

const Header = () => {
    return ( 
        <header className="header">
            <div className="container-fluid">
                <div className="header__inner">
                <NavLink to="/" className="logo"><img src={logo} alt="" className="logo__img" /></NavLink>
                    <nav className="menu">
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





                    <button className="user-btn purple-btn">
                        <p className="user-btn__text">Sign Up</p>
                    </button>
                </div>
            </div>
        </header>
     );
}
 
export default Header;