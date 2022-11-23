//Core
import { Component } from "react";

//Styles
import './productCard.scss'

//Images
import icon from './../../../assets/icons/toCartIcon.svg'

class ProductCard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         inStock: true,
    //     }
    // } 

/*     outStockView = () => {
        return <p style={{ margin: 0, position: 'absolute', top: '145px', left: '90px', fontWeight: 400, fontSize: '24px', lineHeight: '160%' }}>OUT OF STOCK</p>
    } */

    render() {
        const { name, price, image, inStock } = this.props;

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
                <img className="product-card-cart-icon" src={icon} alt="cart" />
            </div>
        )
    }
};

export default ProductCard;