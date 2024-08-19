import './mainPage.scss';
import example from './images/example.png';
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import CreatorItem from '../../components/CreatorItem/CreatorItem';
import CategoryItem from '../../components/CategoryItem/CategoryItem';

const MainPage = () => {
    return ( 
        <>
        <section className="promo">
            <div className="container">
                <div className="promo__inner">
                    <div className="promo__info">
                        <h1 className="promo__info-title">Discover digital art & Collect NFTs</h1>
                        <p className="promo__info-descr">NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.</p>

                        <button className="promo__info-btn purple-btn">
                            <p className="promo__info-btn-text">Get Started</p>
                        </button>

                        <div className="promo-numbers">
                            <div className="promo-numbers__item">
                                <p className="promo-numbers__item-main">240k+ </p>
                                <p className="promo-numbers__item-descr">Total Sale</p>
                            </div>
                            <div className="promo-numbers__item">
                                <p className="promo-numbers__item-main">100k+</p>
                                <p className="promo-numbers__item-descr">Auctions</p>
                            </div>
                            <div className="promo-numbers__item">
                                <p className="promo-numbers__item-main">240k+</p>
                                <p className="promo-numbers__item-descr">Artists</p>
                            </div>
                        </div>
                    </div>
                    <div className="promo__media"><img src={example} alt="" className="promo__media-img" /></div>
                </div>
            </div>
        </section>

        <section className="collection">
            <div className="container">
                <h3 className="collection__title section__title">Trending Collection</h3>
                <p className="collection__text">Checkout our weekly updated trending collection.</p>

                <div className="collection__items">
                <CollectionItem/>
                </div>
            </div>
            
        </section>

        <section className="creators">
        <div className="container">
                <h3 className="creators__title section__title">Top creators</h3>
                <p className="creators__text">Checkout Top Rated Creators on the NFT Marketplace</p>

                <a href="" className="creators__link">View Rankings</a>

                <div className="creators__items">
                    <CreatorItem/>
                </div>
            </div>
        </section>

        <section className="categories">
            <div className="container">
                <h3 className="categories__title section__title">Browse Categories</h3>

                <div className="categories__items">
                    <CategoryItem/>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default MainPage;