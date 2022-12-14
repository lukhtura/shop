//Core
import { useDispatch } from 'react-redux';
//Actions
import { addToCart } from '../../pages/cartPage/cartSlice';
//Styles
import './productCard.scss'

//Images
import icon from './../../../assets/icons/toCartIcon.svg'

const ProductCard = (props) => {

    const dispatch = useDispatch();
    const { name, price, image, inStock, id } = props;

    let classNames = 'product-card';

    return (
        <div className={inStock ? classNames : classNames + ' out-stock'}>
            <div className="product-card-img-container" >
                <img className="product-card-img" src={image} alt="product" />
            </div>
            <div className="product-card-descr">
                <p
                    className="product-card-descr-name"
                    name={name}>{name}</p>
                <p
                    className="product-card-descr-price"
                    price={price}>{price}</p>
            </div>
            <img
                style={{ zIndex: 500 }}
                onClick={() => dispatch(addToCart(id))}
                className="product-card-cart-icon"
                src={icon} alt="cart" />
        </div>
    )
};

export default ProductCard;