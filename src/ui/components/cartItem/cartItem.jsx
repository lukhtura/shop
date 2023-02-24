//Core
import { useDispatch, useSelector } from "react-redux";

//Actions
import { addToCart, removeFromCart } from "src/redux/features/cartSlice";

//Utils
import { currencyExchanger } from "src/utils/currencyExchanger";

//Styles
import "src/ui/components/cartItem/cartItem.scss";
import galleryButton from "src/assets/img/galleryArrow.svg";

const CartItem = (props) => {

    const dispatch = useDispatch();
    const itemsInCart = useSelector(state => state.cart.itemsInCart);
    const currencySelected = useSelector(state => state.header.currencySelected);


    const countCartItemsQuantity = (data, id) => {
        let res = 0;
        data.forEach(item => {
            if (item.shopId === id) {
                res = item.quantity;
            };
        });

        return res;
    };

    const { shopId, name, brand, prices, gallery, activeAttrs } = props;

    const selectedCurrencyPrice = currencyExchanger(prices, currencySelected);

    const renderActiveAttrs = (attrs) => {
        return attrs.map((item, i) => {
            if (item.name === "Color") {
                return (
                    <div className="cart-item_attribute" key={i}>
                        <p className="cart-item_attribute-name">
                            {item.name.toUpperCase()}:<br />
                            <div
                                style={{ backgroundColor: item.value, display: "inline-block" }}
                                className="cart-item_attribute-color" key={i}>
                            </div>
                        </p>
                    </div>
                );
            };

            return (
                <div key={i}>
                    <p className="cart-item_attribute-name">{item.name.toUpperCase()}:</p>
                    <p className="cart-item_attribute-value">{item.value}</p>
                </div>
            );
        });
    };

    const renderGallerySlider = (data) => {
        return data.map((item, i) => <img key={item} className="gallery-item" src={gallery[i]} alt="alt" />);
    };


    return (
        <div className="cart-item">
            <div className="cart-item_inner-left">
                <h2 className="cart-item_brand">{brand}</h2>
                <h3 className="cart-item_name">{name}</h3>
                <p className="cart-item_price">{selectedCurrencyPrice.currency.symbol} {selectedCurrencyPrice.amount}</p>
                {renderActiveAttrs(activeAttrs)}
            </div>
            <div className="cart-item_inner-right">
                <div className="qty-container">
                    <div
                        onClick={() => {
                            dispatch(addToCart(props));
                        }}
                        type="button"
                        className="change-qty-btn">+</div>
                    <div className="cart-item_qty">{countCartItemsQuantity(itemsInCart, shopId)}</div>
                    <div onClick={() => {
                        dispatch(removeFromCart(shopId));
                    }}
                        type="button"
                        className="change-qty-btn">-</div>
                </div>
                <div className="cart-gallery">
                    <div className="cart-gallery_flow">
                        {renderGallerySlider(gallery)}
                    </div>
                    <div>
                        <img
                            className="next-arrow"
                            src={galleryButton}
                            alt="next" />
                        <img
                            className="prev-arrow"
                            src={galleryButton}
                            alt="previous" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;