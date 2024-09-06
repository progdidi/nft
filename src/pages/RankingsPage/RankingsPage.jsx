import './rankingsPage.scss';
import RankingsItem from './RankingsItem/RankingsItem';
import { creators } from '../../helpers/creators/creators';

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
                <div className="container">
                    <div className="rankings__buttons tab__buttons">
                        <button className="rankings__btn active tab-btn">Today</button>
                        <button className="rankings__btn tab-btn">This Week</button>
                        <button className="rankings__btn tab-btn">This Month</button>
                        <button className="rankings__btn tab-btn">All Time</button>
                    </div>

                    <div className="mobile__buttons tab__buttons ">
                        <button className="rankings__btn active tab-btn">1d</button>
                        <button className="rankings__btn tab-btn">7d</button>
                        <button className="rankings__btn tab-btn">30d</button>
                        <button className="rankings__btn tab-btn">All Time</button>
                    </div>

                    <div className="rankings__items">
                        <div className="rankings__header">
                            <div className="rankings__header-item">#</div>
                            <div className="rankings__header-item">Artist</div>
                            <div className="rankings__header-item change">Change</div>
                            <div className="rankings__header-item sold">NFTs Sold</div>
                            <div className="rankings__header-item">Volume</div>
                        </div>

                        {creators.map((creator) => {
                            return (
                                <RankingsItem
                                    name={creator.name}
                                    img={creator.img}
                                    sold={creator.sold}
                                    volume={creator.volume}
                                    key={creator.id}
                                />
                            )
                    })}
                    </div>
                </div>
                

            </div>
        </>
     );
}
 
export default RankingsPage;