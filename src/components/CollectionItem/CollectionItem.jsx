import './collectionItem.scss';

//images
import exampleMain from './exampleMain.png';
import example from './example.png';
import exampleAuthor from './exampleAuthor.png';

const CollectionItem = () => {
    return (
        <div className="collection-item">
            <div className="collection-item__media">
                <img src={exampleMain} alt="" className="collection-item__media-main" />
                <div className="collection-item__preview">
                    <div className="collection-item__preview-item">
                        <img src={example} alt="" className="collection-item__preview-img" />
                    </div>
                    <div className="collection-item__preview-item">
                        <img src={example} alt="" className="collection-item__preview-img" />
                    </div>
                    <div className="collection-item__preview-item">
                        <p className="collection-item__preview-num">1025+</p>
                    </div>
                </div>
            </div>

            <h6 className="collection-item__title">DSGN Animals</h6>
            <div className="collection-item__author">
                <img src={exampleAuthor} alt="" className="collection-item__author-img" />
                <p className="collection-item__author-name">MrFox</p>
            </div>
        </div>
    )
}

export default CollectionItem;