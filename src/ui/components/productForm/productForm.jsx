//Core
import { useDispatch } from 'react-redux';
//Utils
import { Formik, Form, Field } from 'formik';
import { addToCart } from '../../pages/cartPage/cartSlice';
//Styles
import './productForm.scss';


const ProductForm = (props) => {

    const { id, name, description, attributes, prices, gallery, inStock } = props;
    const dispatch = useDispatch();

    const createInitialValues = (data) => {
        const initialValues = {};
        data.map(item => item)
            .forEach(item => {
                initialValues[item.name] = item.items[0].displayValue
            })
        return initialValues;
    };

    const onSubmit = (fields) => {
        dispatch(addToCart({
            id: id + JSON.stringify(fields),
            name,
            prices,
            attributes,
            activeAttrs: fields,
            gallery,
            qty: 1,
        }))
    };

    const renderFormFields = (data) => {

        return (
            data.map((item, i) => {
                if (item.name === 'Color') {
                    return (
                        <div key={i}>
                            <p className='product-form-field-label'>{item.name.toUpperCase()}:</p>
                            <div className='attributes-container'>
                                {item.items.map((color, i) => {
                                    return (
                                        <div
                                            style={{ backgroundColor: color.value }}
                                            className='form_radio-color color-btn' key={i}>
                                            <Field
                                                type="radio"
                                                name='Color'
                                                id={item.name + color.value}
                                                value={color.displayValue} />
                                            <label htmlFor={item.name + color.value}></label>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )
                };

                return (
                    <div key={i}>
                        <p className='product-form-field-label'>{item.name.toUpperCase()}:</p>
                        <div className='attributes-container'>
                            {item.items.map((attribute, i) => {
                                return (
                                    <div key={i} className="form_radio">
                                        <Field
                                            type="radio"
                                            name={item.name}
                                            id={item.name + attribute.value}
                                            value={attribute.displayValue} />
                                        <label htmlFor={item.name + attribute.value}>{attribute.value}</label>
                                    </div>
                                )
                            })}
                        </div>
                    </div >
                );
            })
        );
    };

    const renderSubmitButton = (status) => {
        return (
            status
                ? <button className='add-button' type='submit'>ADD TO CART</button>
                : <button disabled className='add-button disabled' type='submit'>OUT OF STOCK</button>
        );
    };


    return (
        <div className='product-form'>
            <h2 className='product-form-name'>{name}</h2>
            {inStock ? null : <h3 style={{ color: "red" }}> Out of stock!</h3>}
            <Formik
                initialValues={createInitialValues(attributes)}
                onSubmit={onSubmit}
            >
                <Form>
                    {renderFormFields(attributes)}
                    <div className='product-form-item-info-price-container'>
                        <p className='product-form-field-label'>PRICE:</p>
                        <p className='product-form-price'>{prices[0].currency.symbol}{prices[0].amount}</p>
                    </div>
                    {renderSubmitButton(inStock)}
                </Form>
            </Formik>
            {description[0] === '<' || description[1] === '<'
                ? <div dangerouslySetInnerHTML={{ __html: description }}></div>
                : <p>{description}</p>}
        </div>
    );
};


export default ProductForm;