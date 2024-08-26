import './collectionItem.scss';

const CollectionItem = ({mainImg, prevImg, amount, title, authorImg, authorName}) => {
    return (
        <a href="" className="collection-item">
            <div className="collection-item__media">
                <img src={mainImg} alt="" className="collection-item__media-main" />
                <div className="collection-item__preview">
                    <div className="collection-item__preview-item">
                        <img src={prevImg} alt="" className="collection-item__preview-img" />
                    </div>
                    <div className="collection-item__preview-item">
                        <img src={prevImg} alt="" className="collection-item__preview-img" />
                    </div>
                    <div className="collection-item__preview-item">
                        <p className="collection-item__preview-num">{amount}</p>
                    </div>
                </div>
            </div>

            <h6 className="collection-item__title item__title">{title}</h6>
            <div className="collection-item__author">
                <img src={authorImg} alt="" className="collection-item__author-img" />
                <p className="collection-item__author-name">{authorName}</p>
            </div>
        </a>
    )
}

export default CollectionItem;