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

                    <div className="auction-timer">
                        <p className="auction-timer__text">Auction ends in:</p>
                        <div className="auction-timer__items">
                            <div className="auction-timer__item">
                                <p className="auction-timer__item-num">59</p>
                                <p className="auction-timer__item-text">Hours</p>
                            </div>
                            <div className="auction-timer__item">
                                <p className="auction-timer__item-num">59</p>
                                <p className="auction-timer__item-text">Minutes</p>
                            </div>
                            <div className="auction-timer__item">
                                <p className="auction-timer__item-num">59</p>
                                <p className="auction-timer__item-text">Seconds</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default AuctionSection;