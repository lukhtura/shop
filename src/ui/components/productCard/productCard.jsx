//Styles
import './productCard.scss'

//Images
import icon from './../../../assets/icons/toCartIcon.svg'

const ProductCard = (props) => {

    const { name, price, image, inStock } = props;

    let classNames = 'product-card';

    return (
        <div className={inStock ? classNames : classNames + ' out-stock'}>
            <div className="product-card-img-container" >
                {inStock ? null : <p className='out-of-stock-text' >OUT OF STOCK</p>}
                <img className="product-card-img" src={image} alt="product" />
            </div>
            <div className="product-card-descr">
                <p
                    className="product-card-descr-name"
                    name={name}>{name}</p>
                <p
                    className="product-card-descr-price"
                    price={price}>${price}</p>
            </div>
            {inStock ? <img className="product-card-cart-icon" src={icon} alt="cart" /> : null}
        </div>
    )
};

export default ProductCard;