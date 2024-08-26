import wall from './images/wall.png';

import meta from './images/Metamask.svg';
import coin from './images/Coinbase.svg';
import connect from './images/WalletConnect.svg';

import './walletPage.scss';

const WalletPage = () => {
    return (
        <div className="wallet-page">
            <div className="container">
                <div className="wallet-page__inner">
                    <img src={wall} alt="" className="wallet-page__img" />

                    <div className="wallet-page__info">
                        <h2 className="wallet-page__title page__title">Connect wallet</h2>

                        <p className="wallet-page__text">Choose a wallet you want to connect. There are several wallet providers.</p>

                        <a href="" className="wallet-page__link">
                            <img src={meta} alt="" className="wallet-page__link-img" />Metamask
                        </a>
                        
                        <a href="" className="wallet-page__link">
                            <img src={connect} alt="" className="wallet-page__link-img" />Wallet Connect
                        </a>
                        
                        <a href={coin} className="wallet-page__link">
                            <img src={coin} alt="" className="wallet-page__link-img" />Coinbase
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WalletPage;