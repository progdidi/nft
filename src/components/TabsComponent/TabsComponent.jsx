const TabsComponent = () => {
    return (
        <div className="tabs-component">
            <div className="tabs-component__buttons">
                <button className="tabs-component__btn active"><span></span></button>
                <button className="tabs-component__btn"><span></span></button>
                <button className="tabs-component__btn"><span></span></button>
            </div>

            <div className="tabs-component__info">
                <div className="tabs-component__info-item active"></div>
                <div className="tabs-component__info-item"></div>
                <div className="tabs-component__info-item"></div>
            </div>
        </div>
    )
}