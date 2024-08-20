import AuctionTimer from '../AuctionTimer/AuctionTimer';
import './auctionSection.scss';

import author from './author.png';

const AuctionSection = () => {
    return (
        <section className="auction">
            <div className="container">
                <div className="auction__info">
                    <div className="auction__author">
                        <img src={author} alt="" className="auction__author-img" />
                        <p className="auction__author-text">Shroomie</p>
                    </div>

                    <h2 className="auction__title">Magic Mashrooms</h2>

                    <a href="" className="auction__link">See NFT</a>

                    <AuctionTimer/>
                </div>
                
            </div>
        </section>
    )
}

export default AuctionSection;