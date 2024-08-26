import './marketPlacePage.scss';

import { works } from '../../helpers/works/works';
import NFTItem from '../../components/NFTItem/NFTItem';

const MarketPlacePage = () => {
    return ( 
        <>
            <section className="marketplace-page__header">
                <div className="container">
                    <h2 className="marketplace-page__header-title page__title">Browse Marketplace</h2>
                    <p className="marketplace-page__header-text">Browse through more than 50k NFTs on the NFT Marketplace.</p>

                    <form action="" className="marketplace-page__form">
                        <input type="text" className="marketplace-page__form-input" placeholder='Search your favourite NFTs'/>
                        <button className="marketplace-page__form-btn"></button>
                    </form>
                </div>
            </section>

            <div className="marketplace-page__items">
                <div className="marketplace-page__buttons">
                    <button className="marketplace-page__btn"></button>
                    <button className="marketplace-page__btn"></button>
                </div>

                <div className="marketplace-page__info">
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
                <div className="marketplace-page__info"></div>
            </div>

        </>
     );
}
 
export default MarketPlacePage;