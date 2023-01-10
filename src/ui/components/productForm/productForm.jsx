//Core
import { useDispatch, useSelector } from 'react-redux';
//Utils
import { currencyExchanger } from '../../../utils/currencyExchanger';
import { Formik, Form, Field } from 'formik';
import { v4 as genId } from 'uuid';
import { addToCart } from '../../../redux/features/cartSlice';
//Styles
import './productForm.scss';


const ProductForm = (props) => {

    const dispatch = useDispatch();
    const currencySelected = useSelector(state => state.header.currencySelected);

    const createInitialValues = (data) => {
        const initialValues = {};
        data.map(item => item)
            .forEach(item => {
                if (item.name === 'Color') {
                    initialValues[item.name] = item.items[0].displayValue
                } else {
                    initialValues[item.name] = item.items[0].value
                }
            })
        return initialValues;
    };

    const objToStringId = (obj) => {
        let str = '';
        for (const [p, val] of Object.entries(obj)) {
            str += `-${p}-${val}`;
        };

        return str.trim().toLowerCase().replaceAll(/\s/g, '-');
    };

    const objToArrOfObjs = (obj) => {
        const arr = [];
        for (const [key, value] of Object.entries(obj)) {
            arr.push({ name: key, value });
        };
        return arr;
    };

    const onSubmit = (fields) => {
        dispatch(addToCart({
            id: genId(),
            shopId: id + objToStringId(fields),
            name,
            brand,
            quantity: 1,
            prices,
            activeAttrs: objToArrOfObjs(fields),
            gallery,
        }));
    };

    const { id, name, brand, description, attributes, prices, gallery, inStock } = props;

    const selectedCurrencyPrice = currencyExchanger(prices, currencySelected);

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
                                            value={attribute.value} />
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
            <h2 className='product-form-brand'>{brand}</h2>
            <h3 className='product-form-name'>{name}</h3>
            {inStock ? null : <h3 style={{ color: "red" }}> Out of stock!</h3>}
            <Formik
                initialValues={createInitialValues(attributes)}
                onSubmit={onSubmit}
            >
                <Form>
                    {renderFormFields(attributes)}
                    <div className='product-form-item-info-price-container'>
                        <p className='product-form-field-label'>PRICE:</p>
                        <p className='product-form-price'>{selectedCurrencyPrice.currency.symbol} {selectedCurrencyPrice.amount}</p>
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