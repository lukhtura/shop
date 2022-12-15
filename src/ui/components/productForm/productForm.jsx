import { Formik, Form, Field, ErrorMessage } from 'formik';


import './productForm.scss'


const ProductForm = (props) => {

    const { name, description, attributes, prices } = props;


    const createInitialValues = (data) => {
        const initialValues = {}
        data.map(item => item)
            .forEach(item => {
                initialValues[item.name] = item.items[0].displayValue
            })
        return initialValues;
    }

    function onSubmit(fields) {

        console.log(name, fields);
    }


    return (
        <>
            <div className='product-form'>
                <h2 className='product-form-name'>{name}</h2>
                <Formik
                    initialValues={createInitialValues(attributes)}
                    onSubmit={onSubmit}
                >
                    <Form>
                        {attributes.map((item, i) => {
                            if (item.name === 'Color') {
                                return (
                                    <div key={i}>
                                        <p className='product-page-item-info-label'>COLOR:</p>
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
                                    <p className='product-form-field-label'>{item.name}</p>
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
                        <div className='product-form-item-info-price-container'>
                            <p className='product-form-item-info-label'>PRICE:</p>
                            <p className='product-form-item-info-price'>{prices[0].currency.symbol}{prices[0].amount}</p>
                        </div>
                        <button className='add-button' type='submit'>SUBMIT</button>
                    </Form>
                </Formik>
                {description[0] === '<' || description[1] === '<'
                    ? <div dangerouslySetInnerHTML={{ __html: description }}></div>
                    : <p>{description}</p>}
            </div>
        </>
    )
}


export default ProductForm;

// {attributes.map((item, i) => {
//     return (
//             <div key={i}>
//                 <p className='product-page-item-form-label'>{item.name}</p>
//                 <div className='attributes-container'>
//                     {item.items.map((attribute, i) => {
//                         if (i === 0) {
//                             return (
//                                 <div key={i} className="form_radio">
//                                     <input
//                                         type="radio"
//                                         name={item.name}
//                                         id={item.name + attribute.value}
//                                         value={attribute.value} />
//                                     <label htmlFor={item.name + attribute.value}>{attribute.value}</label>
//                                 </div>)

//                         }

//                         return (
//                             <div key={i} className="form_radio">
//                                 <input
//                                     type="radio"
//                                     name={item.name}
//                                     id={item.name + attribute.value}
//                                     value={attribute.value} />
//                                 <label htmlFor={item.name + attribute.value}>{attribute.value}</label>
//                             </div>
//                         )
//                     })}
//                 </div>
//             </div >
//     );
// })}