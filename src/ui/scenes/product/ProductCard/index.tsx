// Core
import { Link } from "react-router-dom";

// Types
import { Price } from "engine/types/products";

// Styles
import useProductCardStyles from "ui/scenes/product/ProductCard/styles";

// Images
import greenCartIcon from "assets/icons/green-cart-icon.svg";

interface ProductCardProps {
  name: string;
  brand: string;
  price: Price;
  image: string;
  inStock: boolean;
  id: string;
}

const ProductCard = ({
  name,
  brand,
  price,
  image,
  inStock,
  id }: ProductCardProps) => {

  const classNames = useProductCardStyles();

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