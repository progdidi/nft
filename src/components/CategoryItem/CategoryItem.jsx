import { NavLink } from 'react-router-dom';

import './categoryItem.scss';


const CategoryItem = ({title, img, icon}) => {
    return (
        <NavLink to="/market" className="category-item">
            <div className="category-item__media">
                <img src={img} alt="" className="category-item__img" />
                <img src={icon} alt="" className="category-item__icon" />
            </div>
            

            <h6 className="category-item__title item__title">{title}</h6>

            
        </NavLink>
    )
}

export default CategoryItem;