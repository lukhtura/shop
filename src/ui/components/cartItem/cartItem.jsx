//Utils
import { Formik, Form, Field } from 'formik';
//Styles
import './cartItem.css'

const CartItem = (props) => {

    const { name, prices, gallery, attributes, activeAttrs } = props;
    console.log(activeAttrs)

    return (
        <div className="cart-item">
            <div className="cart-item-inner-left">
                <h2 className="cart-item-name">{name}</h2>
                <p className="cart-item-price">${prices[0].amount}</p>
                <Formik
                    initialValues={activeAttrs}
                    onSubmit={() => console.log('submit')}
                >
                    <Form>
                        {attributes.map((item, i) => {
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
                        })}
                    </Form>
                </Formik>
            </div>
            <div className="cart-item-inner-right">
                <div className="qty-container">
                    <button type='button' className="incr-btn">+</button>
                    <div className="qty">1</div>
                    <button type='button' className="decr-btn">-</button>
                </div>
                <div className="img-container">
                    <img src={gallery[0]} alt='alt' />
                </div>
            </div>
        </div>
    );
};

export default CartItem;