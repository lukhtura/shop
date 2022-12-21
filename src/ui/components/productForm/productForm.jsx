//Core
import { useDispatch } from 'react-redux';
//Utils
import { Formik, Form, Field } from 'formik';
import { addToCart } from '../../pages/cartPage/cartSlice';
import { v4 } from 'uuid';
//Styles
import './productForm.scss';


const ProductForm = (props) => {

    const { name, id, description, attributes, prices, gallery } = props;
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
        console.log('item added to cart')
        dispatch(addToCart({
            technicId: v4(),
            itemId: id,
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


    return (
        <div className='product-form'>
            <h2 className='product-form-name'>{name}</h2>
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
                    <button className='add-button' type='submit'>ADD TO CART</button>
                </Form>
            </Formik>
            {description[0] === '<' || description[1] === '<'
                ? <div dangerouslySetInnerHTML={{ __html: description }}></div>
                : <p>{description}</p>}
        </div>
    );
};


export default ProductForm;