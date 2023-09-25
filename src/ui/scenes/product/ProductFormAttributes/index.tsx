// Core
import { Field } from 'formik';

// Types
import { Attribute } from 'engine/types/products';

// Components
import Button from 'ui/components/Button';

// Styles
import useProductFormAttributesStylesStyles from 'ui/scenes/product/ProductFormAttributes/styles';
import theme from 'theme';

interface ProductFormAttributesProps {
  data: Attribute[];
}

const ProductFormAttributes = ({ data }: ProductFormAttributesProps) => {
  const classNames = useProductFormAttributesStylesStyles();

  return (
    /* COLOR ATTRIBUTES */
    <>
      {data.map((attributeObject, i) => {
        if (attributeObject.name === 'Color') {
          return (
            <div key={i}>
              <p className={classNames.label}>
                {attributeObject.name.toUpperCase()}
              </p>
              <div className={classNames.attributesContainer}>
                {attributeObject.items.map((color, i) => {
                  return (
                    <div
                      style={{
                        backgroundColor: color.value,
                        border:
                          color.value === theme.colors.background
                            ? '1px solid #d5cece'
                            : undefined,
                      }}
                      className={classNames.colorPicker}
                      key={i}
                    >
                      <Field
                        type="radio"
                        name="Color"
                        id={attributeObject.name + color.value}
                        value={color.displayValue}
                      />
                      <label
                        htmlFor={attributeObject.name + color.value}
                      ></label>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        }

        /* REST ATTRIBUTES LIKE CAPACITY, SIZE ETC. */
        return (
          <div key={i}>
            <p className={classNames.label}>
              {attributeObject.name.toUpperCase()}
            </p>
            <div className={classNames.attributesContainer}>
              {attributeObject.items.map((attribute, i) => {
                return (
                  <Button
                    variant="secondary"
                    key={i}
                    className={classNames.attributesPicker}
                  >
                    <Field
                      type="radio"
                      name={attributeObject.name}
                      id={attributeObject.name + attribute.value}
                      value={attribute.value}
                    />
                    <label htmlFor={attributeObject.name + attribute.value}>
                      {attribute.value}
                    </label>
                  </Button>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductFormAttributes;
