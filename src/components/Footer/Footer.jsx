import DigestSection from '../DigestSection/DigestSection';
import './footer.scss';

//images
import logo from './logo.svg';
import discord from './social/discord.svg';
import youtube from './social/youtube.svg';
import twitter from './social/twitter.svg';
import instagram from './social/instagram.svg';

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer-info">
                        <img src={logo} alt="" className="logo__img" />
                        <p className="footer-info__text">NFT marketplace UI created with Anima for Figma.</p>
                        <div className="social">
                            <p className="social-text">Join our community</p>
                            <ul className="social-list">
                                <li className="social-list__item">
                                    <a href="" className="social-list__item-link">
                                        <img src={discord} alt="" className="social-list__item-img" />
                                    </a>
                                </li>
                                <li className="social-list__item"><a href="" className="social-list__item-link">
                                        <img src={youtube} alt="" className="social-list__item-img" />
                                    </a>
                                </li>
                                <li className="social-list__item"><a href="" className="social-list__item-link">
                                        <img src={twitter} alt="" className="social-list__item-img" />
                                    </a>
                                </li>
                                <li className="social-list__item"><a href="" className="social-list__item-link">
                                        <img src={instagram} alt="" className="social-list__item-img" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-menu">
                        <h6 className="footer__title">Explore</h6>
                        <ul className="footer-menu__list">
                            <li className="footer-menu__list-item"><a href="" className="footer-menu__list-link">Marketplace</a></li>
                            <li className="footer-menu__list-item"><a href="" className="footer-menu__list-link">Rankings</a></li>
                            <li className="footer-menu__list-item"><a href="" className="footer-menu__list-link">Connect a wallet</a></li>
                        </ul>
                    </div>
                    <DigestSection/>
                </div>

                <div className="footer__bottom">
                    <p className="footer__bottom-text">Ⓒ NFT Market. Use this template freely.</p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;