//Core
import { Link } from "react-router-dom";

//Styles
import { useStyles } from "./styles";

//Images
import greenCartIcon from "src/assets/icons/green-cart-icon.svg";



function ProductCard({ name, brand, price, image, inStock, id, category }) {

  /* STYLES */
  const classes = useStyles();
  /* STYLES */

  return (
    <Link
      className={classes.linkWrapper}
      key={id}
      to={`./${category}/${id}`} >

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

    </Link>
  );
}

export default ProductCard;