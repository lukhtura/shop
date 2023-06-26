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
  const [isAddMessage, setIsAddMessage] = useState(false);

  const classNames = useStyles();

  function createFormInitialValues(data) {
    const initialValues = {};
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
    if (inStock) {
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
  }

  function showAndHideAddMessage() {
    const showMessageTimer = setTimeout(() => {
      setIsAddMessage(true);
      clearTimeout(showMessageTimer);
    }, 100);

    const hideMessageTimer = setTimeout(() => {
      setIsAddMessage(false);
      clearTimeout(hideMessageTimer);
    }, 1500);
  }



  return (
    <div className={classNames.container}>
      <h2 className={classNames.brand}>{brand}</h2>
      <h3 className={classNames.name}>{name}</h3>

      {/* IN STOCK CHECK */}
      {inStock ? null : <h3 className={classNames.outOfStockBlink}> Out of stock!</h3>}

      <Formik
        initialValues={createFormInitialValues(attributes)}
        onSubmit={onSubmit}
      >
        <Form>

          <ProductFormAttributes data={attributes} />

          {/* PRICE AND ADD MESSAGE */}
          <p className={classNames.priceLabel}>PRICE:</p>
          {isAddMessage ? <p className={classNames.addMessage}>Product added!</p> : <p className={classNames.priceNumber}>{selectedCurrencyPrice.currency.symbol} {selectedCurrencyPrice.amount}</p>}

          {/* ADD TO CART BUTTON */}
          <SubmitButton
            onClick={showAndHideAddMessage}
            disabled={isAddMessage || !inStock}
            className={classNames.addToCartBtn}>
            {inStock ? "ADD TO CART" : "OUT OF STOCK"}
          </SubmitButton>

        </Form>
      </Formik>

      {/* DESCRIPTION */}
      {description[0] === "<" || description[1] === "<"
        ? <div className={classNames.description} dangerouslySetInnerHTML={{ __html: description }}></div>
        : <p className={classNames.description}>{description}</p>}
    </div>
  );
}


export default ProductForm;