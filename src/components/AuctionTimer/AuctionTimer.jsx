import './auctionTimer.scss';

const AuctionTimer = () => {
    return ( 
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
            
            <button className="auction-timer__btn purple-btn">
            Place Bid
            </button>
        </div>
     );
}
 
export default AuctionTimer;