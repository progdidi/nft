import './creatorItem.scss';
import example from './example.png';

const CreatorItem = ({num, img, name, sold, volume}) => {
    return (
        <a href="" className="creator-item">
            <p className="creator-item__num">{num}</p>

            <img src={img} alt="" className="creator-item__img" />

            <h6 className="creator-item__title item__title">{name}</
            h6>

            <div className="creator-item__total">
                <p className="creator-item__total-text">Total Sales: {sold}</p>
                <p className="creator-item__total-num">{volume} ETH</p>
            </div>
        </a>
    )
}

export default CreatorItem;