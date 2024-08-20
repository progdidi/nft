import './artistPage.scss';
import { works } from '../../helpers/works';
import NFTItem from '../../components/NFTItem/NFTItem';

//images social
import discord from './social/discord.svg';
import globe from './social/globe.svg';
import instagram from './social/instagram.svg';
import twitter from './social/twitter.svg';
import youtube from './social/youtube.svg';
import example from './example.png';

const ArtistPage = () => {
    return ( 
        <>

        <div className="artist-page">
            <div className="artist-info">
                <div className="container">
                    <img src={example} alt="" className="artist-info__img" />
                    <h2 className="artist-info__title page__title">Animakid</h2>
                    <div className="artist-info__buttons">
                        <button className="artist-info__btn">0xc0E3...B79C</button>
                        <button className="artist-info__btn">Follow</button>
                    </div>

                    <div className="artist-info__numbers">
                        <div className="artist-info__numbers-item">
                            <div className="artist-info__numbers-main">250k+</div>
                            <div className="artist-info__numbers-descr">Volume</div>
                        </div>
                        <div className="artist-info__numbers-item">
                            <div className="artist-info__numbers-main">50+</div>
                            <div className="artist-info__numbers-descr">NFTs Sold</div>
                        </div>
                        <div className="artist-info__numbers-item">
                            <div className="artist-info__numbers-main">3000+</div>
                            <div className="artist-info__numbers-descr">Followers</div>
                        </div>
                    </div>

                    <div className="artist-info__bio">
                        <h6 className="artist-info__div-title">Bio</h6>
                        <p className="artist-info__bio-text">The internet's friendliest designer kid.</p>
                    </div>

                    <h6 className="artist-info__div-title">Links</h6>
                    <div className="artist-info__links">
                        <a href="" className="artist-info__links-item">
                            <img src={globe} alt="" className="artist-info__links-img" />
                        </a>
                        <a href="" className="artist-info__links-item">
                            <img src={discord} alt="" className="artist-info__links-img" />
                        </a>
                        <a href="" className="artist-info__links-item">
                            <img src={youtube} alt="" className="artist-info__links-img" />
                        </a>
                        <a href="" className="artist-info__links-item">
                            <img src={twitter} alt="" className="artist-info__links-img" />
                        </a>
                        <a href="" className="artist-info__links-item">
                            <img src={instagram} alt="" className="artist-info__links-img" />
                        </a>
                    </div>
                </div>
                

                
            </div>

            <div className="artist-products">
                <div className="container">
                    <div className="artist-products__inner">
                        <div className="artist-products__buttons">
                            <div className="artist-products__btn">Created</div>
                            <div className="artist-products__btn">owned</div>
                            <div className="artist-products__btn">Collection</div>
                        </div>

                        <div className="artist-products__info">
                            <NFTItem/>
                        </div>
                        <div className="artist-products__info"></div>
                        <div className="artist-products__info"></div>
                    </div>
                </div>
                    
            </div>
            
        </div>
        
        </>
     );
}
 
export default ArtistPage;