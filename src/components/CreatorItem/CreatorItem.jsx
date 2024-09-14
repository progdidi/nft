import { NavLink } from 'react-router-dom';

import './creatorItem.scss';

//nft

import example from './example.png';

const CreatorItem = ({num, img, name, sold, volume}) => {
    return (
        <>
            <NavLink to="/artist" className="creator-item">
                <p className="creator-item__num">{num}</p>

                <img src={img} alt="" className="creator-item__img" />

                <div>
                    <h6 className="creator-item__title item__title">{name}</
                    h6>

                    <div className="creator-item__total">
                        <p className="creator-item__total-text">Total Sales: </p>
                        <p className="creator-item__total-num">{volume} ETH</p>
                    </div>
                </div>

                
            </NavLink>
        </>
        
    )
}

export default CreatorItem;