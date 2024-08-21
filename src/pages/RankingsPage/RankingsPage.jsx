import './rankingsPage.scss';
import RankingsItem from './RankingsItem/RankingsItem';

const RankingsPage = () => {
    return ( 
        <>
            <section className="rankings__header page__header">
                <div className="container">
                    <h2 className="rankings__header-title page__title">Top Creators</h2>

                    <p className="rankings__header-text">Check out top ranking NFT artists on the NFT Marketplace.</p>
                </div>
            </section>

            <div className="rankings__info">
                <div className="rankings__buttons">
                    <button className="rankings__btn active tab-btn">Today</button>
                    <button className="rankings__btn tab-btn">This Week</button>
                    <button className="rankings__btn tab-btn">This Month</button>
                    <button className="rankings__btn tab-btn">All Time</button>
                </div>

                <div className="rankings__items">
                    <div className="rankings__header">
                        <div className="rankings__item">#</div>
                        <div className="rankings__item">Artist</div>
                        <div className="rankings__item">Change</div>
                        <div className="rankings__item">NFTs Sold</div>
                        <div className="rankings__item">Volume</div>
                    </div>
                    <RankingsItem/>
                </div>

            </div>
        </>
     );
}
 
export default RankingsPage;