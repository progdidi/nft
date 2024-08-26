import './mainPage.scss';
import example from './images/example.png';

//collections
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import { collections } from '../../helpers/collections/collections';

//creators
import CreatorItem from '../../components/CreatorItem/CreatorItem';
import { creators } from '../../helpers/creators/creators';


import CategoryItem from '../../components/CategoryItem/CategoryItem';
import NFTItem from '../../components/NFTItem/NFTItem';
import AuctionSection from '../../components/AuctionSection/AuctionSection';
import HowItem from './HowItem/HowItem';

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
                
                    {collections.map((coll) => {
                            return (
                                <CollectionItem
                                    title={coll.title}
                                    mainImg={coll.mainImg}
                                    prevImg={coll.prevImg}
                                    amount={coll.amount}
                                    authorImg={coll.author.img}
                                    authorName={coll.author.name}
                                    key={coll.id}
                                />
                            )
                    })}
                </div>
            </div>
            
        </section>

        <section className="creators">
        <div className="container">
                <h3 className="creators__title section__title">Top creators</h3>
                <p className="creators__text">Checkout Top Rated Creators on the NFT Marketplace</p>

                <a href="" className="creators__link">View Rankings</a>

                <div className="creators__items">

                    {creators.map((creator) => {
                            return (
                                <CreatorItem
                                    name={creator.name}
                                    num={creator.id}
                                    img={creator.img}
                                    sold={creator.sold}
                                    volume={creator.volume}
                                    key={creator.id}
                                />
                            )
                    })}
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

        <section className="more">
            <div className="container">
                <h3 className="more__title section__title">Discover More NFTs</h3>

                <p className="more__text">Explore new trending NFTs</p>

                <a href="" className="more__link">See</a>

                <div className="more__items">
                    <NFTItem/>
                </div>
            </div>
        </section>

        <AuctionSection/>

        <section className="how">
            <div className="container">
                <h3 className="how__title section__title"></h3>
                <p className="how__text">src/pages/MainPage/images/how/how1.svg</p>

                <div className="how__items">
                    <HowItem/>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default MainPage;