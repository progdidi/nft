const RankingsItem = () => {
    return (
        <div className="rankings-item">
            <div className="rankings-item__number">1</div>
            <div className="rankings-item__artist">
                <img src="" alt="" className="rankings-item__img" />
                <p className="rankings-item__name"></p>
            </div>
            <p className="rankings-item__change">
            +1.41%
            </p>
            <div className="rankings-item__sold">
            602
            </div>
            <div className="rankings-item__volume">12.4 ETH</div>
        </div>
    )
}

export default RankingsItem;