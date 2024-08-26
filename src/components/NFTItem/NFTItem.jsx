import { NavLink } from 'react-router-dom';

import './nftItem.scss';

import exampleAuthor from './exampleAuthor.png';

const NFTItem = ({img, title, authorImg, authorName, price, highest}) => {
    return (
        <NavLink to="/nft" className="nft-item">
            <div className="nft-item__media"><img src={img} alt="" className="nft-item__media-img" /></div>

            <div className="nft-item__about">
                <h6 className="nft-item__title item__title">{title}</h6>
                <div className="nft-item__author">
                    <img src={exampleAuthor} alt="" className="nft-item__author-img" />
                    <p className="nft-item__author-text">{authorName}</p>
                </div>

                <div className="nft-item__prices">
                    <div className="nft-item__prices-item">
                        <p className="nft-item__price-text">Price</p>
                        <p className="nft-item__price-num">{price} ETH</p>
                    </div>
                    <div className="nft-item__prices-item">
                        <p className="nft-item__price-text">Highest Bid</p>
                        <p className="nft-item__price-num">{highest} wETH</p>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}

export default NFTItem;