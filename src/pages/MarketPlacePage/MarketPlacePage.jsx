import './marketPlacePage.scss';

import { works } from '../../helpers/works/works';
import NFTItem from '../../components/NFTItem/NFTItem';

//images
import search from './search.svg';

const MarketPlacePage = () => {
    return ( 
        <>
            <section className="marketplace-page__header">
                <div className="container">
                    <h2 className="marketplace-page__header-title page__title">Browse Marketplace</h2>
                    <p className="marketplace-page__header-text">Browse through more than 50k NFTs on the NFT Marketplace.</p>

                    <form action="" className="search__form">
                        <input type="text" className="search__form-input" placeholder='Search your favourite NFTs'/>
                        <button className="search__form-btn">
                            <img src={search} alt="" className="search__form-img" />
                        </button>
                    </form>
                </div>
            </section>

            <div className="marketplace-page__inner">
                <div className="marketplace-page__buttons">
                    <button className="marketplace-page__btn">NFTs</button>
                    <button className="marketplace-page__btn">Collections</button>
                </div>



                <div className="marketplace-page__info">
                    <div className="container">
                        <div className="marketplace-page__item nft">
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

                        <div className="marketplace-page__item collection">

                        </div>
                    </div>
                   
                    
                </div>
                
            </div>

        </>
     );
}
 
export default MarketPlacePage;