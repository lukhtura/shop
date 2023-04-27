//Styles
import { useStyles } from "./styles";

//Images
import greenCartIcon from "src/assets/icons/green-cart-icon.svg"

function ProductCard({ name, brand, price, image, inStock }) {

  /* STYLES */
  const classes = useStyles();
  /* STYLES */

  return (
    <div className={inStock
      ? classes.card
      : `${classes.card}  ${classes.outStock}`}>

      {/* IMAGE */}
      <div className={classes.imgContainer} >
        {inStock ? null : <p className={classes.outStockText}>OUT OF STOCK</p>}
        <img className={classes.img} src={image} alt="product" />
      </div>

      {/* DESCRIPTION */}
      <div className={classes.descriptionContainer}>
        <p className={`${classes.name} ${classes.descriptionText}`}>{brand} {name}</p>
        <p className={`${classes.price} ${classes.descriptionText}`}>{price.currency.symbol} {price.amount}</p>
      </div>

      {/* CART ICON */}
      {
        inStock
          ? <img className={classes.cartIcon} src={greenCartIcon} alt="cart" />
          : null
      }
    </div>
  );
}

export default ProductCard;