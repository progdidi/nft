import './nftItem.scss';

import example from './example.png';
import exampleAuthor from './exampleAuthor.png';

const NFTItem = () => {
    return (
        <div className="nft-item">
            <div className="nft-item__media"><img src={example} alt="" className="nft-item__media-img" /></div>

            <div className="nft-item__about">
                <h6 className="nft-item__title item__title">Distant Galaxy</h6>
                <div className="nft-item__author">
                    <img src={exampleAuthor} alt="" className="nft-item__author-img" />
                    <p className="nft-item__author-text">MoonDancer</p>
                </div>

                <div className="nft-item__prices">
                    <div className="nft-item__prices-item">
                        <p className="nft-item__price-text">Price</p>
                        <p className="nft-item__price-num">1.63 ETH</p>
                    </div>
                    <div className="nft-item__prices-item">
                        <p className="nft-item__price-text">Highest Bid</p>
                        <p className="nft-item__price-num">0.33 wETH</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTItem;