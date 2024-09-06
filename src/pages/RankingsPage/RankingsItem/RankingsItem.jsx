import './rankingsItem.scss';
import example from './example.png';

const RankingsItem = ({num, img, name, sold, volume}) => {
    return (
        <div className="rankings-item">
            <div className="rankings-item__number">1</div>
            <div className="rankings-item__artist">
                <img src={img} alt="" className="rankings-item__img" />
                <p className="rankings-item__name">{name}</p>
            </div>
            <p className="rankings-item__change up">
            +1.41%
            </p>
            <div className="rankings-item__sold">
            {sold}
            </div>
            <div className="rankings-item__volume">{volume} ETH</div>
        </div>
    )
}

export default RankingsItem;