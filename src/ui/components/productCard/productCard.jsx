//Styles
import 'src/ui/components/productCard/productCard.scss'

//Images
import greenCartIcon from 'src/assets/icons/green-cart-icon.svg'

const ProductCard = ({ name, brand, price, image, inStock }) => {

    let classNames = 'product-card';

    return (
        <div className={inStock ? classNames : classNames + ' out-stock'}>
            <div className="product-card-img-container" >
                {inStock ? null : <p className='out-of-stock-text'>OUT OF STOCK</p>}
                <img className="product-card-img" src={image} alt="product" />
            </div>
            <div className="product-card-descr">
                <p
                    className="product-card-descr-name">{brand} {name}</p>
                <p
                    className="product-card-descr-price">{price.currency.symbol} {price.amount}</p>
            </div>
            {inStock ? <img className="product-card-cart-icon" src={greenCartIcon} alt="cart" /> : null}
        </div>
    )
};

export default ProductCard;