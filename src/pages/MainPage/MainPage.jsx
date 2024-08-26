import './mainPage.scss';
import example from './images/example.png';

//collections
import CollectionItem from '../../components/CollectionItem/CollectionItem';
import { collections } from '../../helpers/collections/collections';

//creators
import CreatorItem from '../../components/CreatorItem/CreatorItem';
import { creators } from '../../helpers/creators/creators';

//categories
import { categories } from '../../helpers/categories/categories';
import CategoryItem from '../../components/CategoryItem/CategoryItem';

//nft
import { works } from '../../helpers/works/works';
import NFTItem from '../../components/NFTItem/NFTItem';

//how section
import how1 from './images/how/how1.svg';
import how2 from './images/how/how2.svg';
import how3 from './images/how/how3.svg';

import AuctionSection from '../../components/AuctionSection/AuctionSection';


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
                    {categories.map((item) => {
                        return (
                            <CategoryItem
                                title={item.title}
                                img={item.img}
                                icon={item.icon}
                                key={item.id}
                            />
                        )
                    })}
                </div>
            </div>
        </section>

        <section className="more">
            <div className="container">
                <h3 className="more__title section__title">Discover More NFTs</h3>

                <p className="more__text">Explore new trending NFTs</p>

                <a href="" className="more__link">See</a>

                <div className="more__items">
                 
                    {works.map((work) => {
                        return (
                            <NFTItem
                                title={work.title}
                                img={work.img}
                                authorName={work.author}
                                price={work.price}
                                highest={work.highest}
                                key={work.id}
                            />
                        )
                    })}

                </div>
            </div>
        </section>

        <AuctionSection/>

        <section className="how">
            <div className="container">
                <h3 className="how__title section__title">How it works</h3>
                <p className="how__text">Find out how to get started</p>

                <div className="how__items">
                   <div className="how__item">
                        <img src={how1} alt="" className="how__item-img" />
                        <h6 className="how__item-title item__title">Setup Your wallet</h6>
                        <p className="how__item-text">Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.</p>
                   </div>
                   <div className="how__item">
                        <img src={how2} alt="" className="how__item-img" />
                        <h6 className="how__item-title item__title">Create Collection</h6>
                        <p className="how__item-text">Upload your work and setup your collection. Add a description, social links and floor price.</p>
                   </div>
                   <div className="how__item">
                        <img src={how3} alt="" className="how__item-img" />
                        <h6 className="how__item-title item__title">Start Earning</h6>
                        <p className="how__item-text">Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.</p>
                   </div>
                </div>
            </div>
        </section>
        </>
     );
}
 
export default MainPage;