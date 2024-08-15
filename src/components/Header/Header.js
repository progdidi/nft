import './header.scss';

//images
import logo from './images/logo.svg';
import user from './images/user.svg';

const Header = () => {
    return ( 
        <header className="header">
            <div className="container-fluid">
                <div className="header__inner">
                    <a href="" className="logo">
                        <img src={logo} alt="" className="logo__img" />
                    </a>
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__list-item"><a href="" className="menu__list-link">Marketplace</a></li>
                            <li className="menu__list-item"><a href="" className="menu__list-link">Rankings</a></li>
                            <li className="menu__list-item"><a href="" className="menu__list-link">Connect a wallet</a></li>
                        </ul>
                    </nav>

                    <button className="user-btn">
                        <img src={user} alt="" className="user-btn__img" />
                        <p className="user-btn__text">Sign Up</p>
                    </button>
                </div>
            </div>
        </header>
     );
}
 
export default Header;