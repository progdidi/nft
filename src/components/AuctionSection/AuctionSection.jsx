import AuctionTimer from '../AuctionTimer/AuctionTimer';
import './auctionSection.scss';
import { NavLink } from 'react-router-dom';

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

                    

                    <AuctionTimer/>

                    <NavLink to="/nft" className="auction__link purple-btn"> <p>See NFT</p> </NavLink>
                </div>
                
            </div>
        </section>
    )
}

export default AuctionSection;