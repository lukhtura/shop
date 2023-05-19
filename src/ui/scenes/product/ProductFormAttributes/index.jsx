//Core
import { Field } from "formik";

//Styles
import { useStyles } from "./styles";



function ProductFormAttributes({ data }) {

  /**/
  const classes = useStyles();
  /**/

  return (
    /* COLOR ATTRIBUTES */
    data.map((attributeObject, i) => {
      if (attributeObject.name === "Color") {
        return (
          <div key={i}>
            <p className={classes.label}>{attributeObject.name.toUpperCase()}</p>
            <div className={classes.attributesContainer}>
              {attributeObject.items.map((color, i) => {
                return (
                  <div
                    style={{ backgroundColor: color.value }}
                    className={classes.colorPicker} key={i}>
                    <Field
                      type="radio"
                      name="Color"
                      id={attributeObject.name + color.value}
                      value={color.displayValue} />
                    <label htmlFor={attributeObject.name + color.value}></label>
                  </div>
                )
              })}
            </div>
          </div>
        )
      }

      /* REST ATTRIBUTES LIKE CAPACITY, SIZE ETC. */
      return (
        <div key={i}>
          <p className={classes.label}>{attributeObject.name.toUpperCase()}</p>
          <div className={classes.attributesContainer}>

            {attributeObject.items.map((attribute, i) => {
              return (
                <div key={i} className={classes.attributesPicker}>
                  <Field
                    type="radio"
                    name={attributeObject.name}
                    id={attributeObject.name + attribute.value}
                    value={attribute.value} />
                  <label htmlFor={attributeObject.name + attribute.value}>{attribute.value}</label>
                </div>
              );
            })}

          </div>
        </div >
      );
    })
  );
}

export default ProductFormAttributes;