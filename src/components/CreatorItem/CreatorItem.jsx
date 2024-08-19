import './creatorItem.scss';
import example from './example.png';

const CreatorItem = () => {
    return (
        <a href="" className="creator-item">
            <p className="creator-item__num">1</p>

            <img src={example} alt="" className="creator-item__img" />

            <h6 className="creator-item__title item__title">Keepitreal</
            h6>

            <div className="creator-item__total">
                <p className="creator-item__total-text">Total Sales:</p>
                <p className="creator-item__total-num">34.53 ETH</p>
            </div>
        </a>
    )
}

export default CreatorItem;