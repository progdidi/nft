import './categoryItem.scss';

import example from './example.png';
import icon from './icon.svg';

const CategoryItem = () => {
    return (
        <a href="" className="category-item">
            <div className="category-item__media">
                <img src={example} alt="" className="category-item__img" />
                <img src={icon} alt="" className="category-item__icon" />
            </div>
            

            <h6 className="category-item__title item__title">Art</h6>

            
        </a>
    )
}

export default CategoryItem;