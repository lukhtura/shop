//Core
import { Field } from "formik";

//Types
import { Attribute } from "engine/types/products";

//Styles
import useProductFormAttributesStylesStyles from "ui/scenes/product/ProductFormAttributes/styles";

interface ProductFormAttributesProps {
  data: Attribute[];
}

const ProductFormAttributes: React.FC<ProductFormAttributesProps> = ({ data }) => {

  const classNames = useProductFormAttributesStylesStyles();

  return (
    /* COLOR ATTRIBUTES */
    <>
      {data.map((attributeObject, i) => {
        if (attributeObject.name === "Color") {
          return (
            <div key={i}>
              <p className={classNames.label}>{attributeObject.name.toUpperCase()}</p>
              <div className={classNames.attributesContainer}>
                {attributeObject.items.map((color, i) => {
                  return (
                    <div
                      style={{ backgroundColor: color.value }}
                      className={classNames.colorPicker} key={i}>
                      <Field
                        type="radio"
                        name="Color"
                        id={attributeObject.name + color.value}
                        value={color.displayValue} />
                      <label htmlFor={attributeObject.name + color.value}></label>
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
            <p className={classNames.label}>{attributeObject.name.toUpperCase()}</p>
            <div className={classNames.attributesContainer}>

              {attributeObject.items.map((attribute, i) => {
                return (
                  <div key={i} className={classNames.attributesPicker}>
                    <Field
                      type="radio"
                      name={attributeObject.name}
                      id={attributeObject.name + attribute.value}
                      value={attribute.value} />
                    <label htmlFor={attributeObject.name + attribute.value}>{attribute.value}</label>
                  </div>
                )
              })}

            </div>
          </div >
        );
      })}
    </>
  );
}

export default ProductFormAttributes;