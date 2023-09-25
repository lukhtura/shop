//Core
import { useAppDispatch, useAppSelector } from 'engine/redux/hooks';
import { Formik, Form } from 'formik';
import { v4 as genId } from 'uuid';
import { useState } from 'react';

//Actions
import { addToCart } from 'engine/redux/slices/cartSlice';

//Types
import { Attribute, Product } from 'engine/types/products';

//Utils
import { currencyExchanger } from 'utils/currencyExchanger';
import { objectToStringID } from 'utils/objectToStringID';
import { objectToArrayOfObjects } from 'utils/objectToArrayOfObjects';

//Components
import ProductFormAttributes from 'ui/scenes/product/ProductFormAttributes';
import Button from 'ui/components/Button';

//Styles
import useProductFormStyles from 'ui/scenes/product/ProductForm/styles';

type ProductFormProps = Omit<Product, 'category'>;

interface FormValues {
  [key: string]: string;
}

const ProductForm = ({
  id,
  name,
  brand,
  description,
  attributes,
  prices,
  gallery,
  inStock,
}: ProductFormProps) => {
  const dispatch = useAppDispatch();
  const currencySelected = useAppSelector(
    (state) => state.header.currencySelected
  );
  const selectedCurrencyPrice = currencyExchanger(prices, currencySelected);
  const [isAddMessage, setIsAddMessage] = useState(false);

  const classNames = useProductFormStyles();

  function createFormValues(data: Attribute[]): FormValues {
    const initialValues: FormValues = {};

    if (data) {
      data
        .map((item) => item)
        .forEach((item) => {
          if (item.name.toLowerCase() === 'color') {
            initialValues[item.name] = item.items[0].displayValue;
          } else {
            initialValues[item.name] = item.items[0].value;
          }
        });
    }

    return initialValues;
  }

  function onSubmit(fields: FormValues): void {
    if (inStock) {
      dispatch(
        addToCart({
          id: genId(),
          shopId: id + objectToStringID(fields),
          name,
          brand,
          quantity: 1,
          prices,
          activeAttributes: objectToArrayOfObjects(fields),
          gallery,
          attributes,
        })
      );
    }
  }

  function showAndHideAddMessage(): void {
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
    <div className={classNames.formContainer}>
      <h2 className={classNames.brand}>{brand}</h2>
      <h3 className={classNames.name}>{name}</h3>

      {/* IN STOCK CHECK */}
      {inStock ? null : (
        <h3 className={classNames.outOfStockBlink}> Out of stock!</h3>
      )}

      <Formik initialValues={createFormValues(attributes)} onSubmit={onSubmit}>
        <Form>
          <ProductFormAttributes data={attributes} />

          {/* PRICE AND ADD MESSAGE */}
          <p className={classNames.priceLabel}>PRICE:</p>
          {isAddMessage ? (
            <p className={classNames.addMessage}>Product added!</p>
          ) : (
            <p className={classNames.priceNumber}>
              {selectedCurrencyPrice.currency.symbol}{' '}
              {selectedCurrencyPrice.amount}
            </p>
          )}

          {/* ADD TO CART BUTTON */}
          <Button
            variant="accept"
            onClick={showAndHideAddMessage}
            isDisabled={isAddMessage || !inStock}
            className={classNames.addToCartBtn}
          >
            {inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
          </Button>
        </Form>
      </Formik>

      {/* DESCRIPTION */}
      {description[0] === '<' || description[1] === '<' ? (
        <div
          className={classNames.description}
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      ) : (
        <p className={classNames.description}>{description}</p>
      )}
    </div>
  );
};

export default ProductForm;
