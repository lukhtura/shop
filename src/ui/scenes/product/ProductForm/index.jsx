//Core
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";
import { v4 as genId } from "uuid";
import { useState } from "react";

//Actions
import { addToCart } from "engine/redux/slices/cartSlice";

//Utils
import { currencyExchanger } from "utils/currencyExchanger";
import { objectToStringID } from "utils/objectToStringID";
import { objectToArrayOfObjects } from "utils/objectToArrayOfObjects";

//Components
import ProductFormAttributes from "ui/scenes/product/ProductFormAttributes";
import SubmitButton from "ui/components/SubmitButton";

//Styles
import { useStyles } from "./styles";



function ProductForm({ id, name, brand, description, attributes, prices, gallery, inStock }) {


  const dispatch = useDispatch();
  const currencySelected = useSelector(state => state.header.currencySelected);
  const selectedCurrencyPrice = currencyExchanger(prices, currencySelected);
  const [isShowAddMessage, setIsShowAddMessage] = useState(false);

  const classes = useStyles();


  function createFormInitialValues(data) {
    const initialValues = {}
    data.map(item => item)
      .forEach(item => {
        if (item.name === "Color") {
          initialValues[item.name] = item.items[0].displayValue;
        } else {
          initialValues[item.name] = item.items[0].value;
        }
      });
    return initialValues;
  }

  function onSubmit(fields) {
    dispatch(addToCart({
      id: genId(),
      shopId: id + objectToStringID(fields),
      name,
      brand,
      quantity: 1,
      prices,
      activeAttrs: objectToArrayOfObjects(fields),
      gallery,
    }));
  }

  function showAddMessage() {
    setTimeout(() => setIsShowAddMessage(true), 100)
    setTimeout(() => setIsShowAddMessage(false), 1500)
  }



  return (
    <div className={classes.container}>
      <h2 className={classes.brand}>{brand}</h2>
      <h3 className={classes.name}>{name}</h3>

      {/* IN STOCK CHECK */}
      {inStock ? null : <h3 style={{ color: "red" }}> Out of stock!</h3>}

      <Formik
        initialValues={createFormInitialValues(attributes)}
        onSubmit={onSubmit}
      >
        <Form>

          <ProductFormAttributes data={attributes} />

          {/* PRICE */}
          <p className={classes.priceLabel}>PRICE:</p>
          <p className={classes.priceNumber}>{selectedCurrencyPrice.currency.symbol} {selectedCurrencyPrice.amount}</p>

          {/* ADD TO CART BUTTON */}
          <SubmitButton
            onClick={showAddMessage}
            disabled={isShowAddMessage || !inStock}
            className={classes.addToCartBtn}>
            {inStock ? "ADD TO CART" : "OUT OF STOCK"}
          </SubmitButton>

        </Form>
      </Formik>

      {isShowAddMessage ? <p className={classes.message}>Product added!</p> : null}

      {/* NORMALIZE DESCRIPTION */}
      {description[0] === "<" || description[1] === "<"
        ? <div dangerouslySetInnerHTML={{ __html: description }}></div>
        : <p>{description}</p>}
    </div>
  );
}


export default ProductForm;