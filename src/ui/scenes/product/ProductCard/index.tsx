//Core
import { Link } from "react-router-dom";

//Styles
import { useStyles } from "./styles";

//Images
import greenCartIcon from "assets/icons/green-cart-icon.svg";



function ProductCard({ name, brand, price, image, inStock, id }) {

  const classNames = useStyles();

  return (
    <Link
      className={classNames.linkWrapper}
      key={id}
      to={`./${id}`} >
      <div className={inStock
        ? classNames.card
        : `${classNames.card}  ${classNames.outStock}`}>


        {/* IMAGE */}
        <div className={classNames.imgContainer} >
          {inStock ? null : <p className={classNames.outStockText}>OUT OF STOCK</p>}
          <img className={classNames.img} src={image} alt="product" loading="lazy" />
        </div>

        {/* DESCRIPTION */}
        <div className={classNames.descriptionContainer}>
          <p className={`${classNames.name} ${classNames.descriptionText}`}>{brand} {name}</p>
          <p className={`${classNames.price} ${classNames.descriptionText}`}>{price.currency.symbol} {price.amount}</p>
        </div>

        {/* CART ICON */}
        {
          inStock
            ? <img className={classNames.cartIcon} src={greenCartIcon} alt="cart" />
            : null
        }
      </div >
    </Link>
  );
}

export default ProductCard;