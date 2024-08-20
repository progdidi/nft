import './nftPage.scss';

import NFTItem from '../../components/NFTItem/NFTItem';

import example from './example.png';
import AuctionTimer from '../../components/AuctionTimer/AuctionTimer';

const NFTPage = () => {
    return ( 
        <>
            <section className="nft-page">
                <img src={example} alt="" className="nft-page__img" />

                <div className="container">
                    <div className="nft-page__inner">
                        <div className="nft-page__info">
                            <h2 className="nft-page__info-title page__title">The Orbitians</h2>
                            <p className="nft-page__info-date">Minted on Sep 30, 2022</p>

                            <div className="nft-page__author">
                                <h6 className="descr__title">Created By</h6>
                                <a href="" className="nft-page__author-link">
                                    <img src="" alt="" className="nft-page__author-img" />
                                    Orbitian
                                </a>
                            </div>

                            <div className="nft-page__descr">
                                <h6 className="descr__title">Description</h6>

                                <p className="nft-page__descr-text">The Orbitians <br></br> is a collection of 10,000 unique NFTs on the Ethereum blockchain,</p>

                                <p className="nft-page__descr-text">There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.</p>

                                <p className="nft-page__descr-text">They live in a metal space machines, high up in the sky and only have one foot on Earth. These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.</p>
                            </div>

                            <div className="nft-page__details">
                                <h6 className="descr__title">Description</h6>
                                <a href="" className="nft-page__details-link">View on Etherscan</a>
                                <a href="" className="nft-page__details-link">View Original</a>
                            </div>

                            <div className="nft-page__tags">
                                <h6 className="descr__title">Tags</h6>
                                <div className="nft-page__tags-inner">
                                    <a href="" className="nft-page__tag">Animation</a>
                                    <a href="" className="nft-page__tag">illustration</a>
                                    <a href="" className="nft-page__tag">moon</a>
                                    <a href="" className="nft-page__tag">moon</a>
                                </div>
                                
                            </div>
                        </div>

                        <AuctionTimer/>
                    </div>
                    
                </div>
            </section>

            <section className="author-more">
                <div className="container">
                    <h3 className="author-more__title section__title">More from this artist</h3>
                    <a href="" className="author-more__link">Go To Artist Page</a>

                    <div className="author-more__inner">
                        <NFTItem/>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default NFTPage;