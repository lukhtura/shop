//Core
import { Component } from "react";
// import DataQuerys from "../../../services/DataQuerys";

//Styles 
import './ProductPage.scss'


class ProductPage extends Component {


  render() {


    return (
      <>
      <div className="page-container">
        <div className="galery"></div>
        <div className="product">
            <div className="img-container">
                <div 
                className="fake"
                style={{
                    width: '610px',
                    height: '511px'
                }}></div>
            </div>
            <div className="info-container">
                <>
                <h2 className="product-item-name">Apollo</h2>
                    <h3 className="product-item-descr">Running Short</h3>
                    <p className="product-item-price">$50.00</p>
                    <p className="product-item-size-label">size:</p>
                    <div className="size-box-container">
                        <button className="size-btn" type="button">XS</button>
                        <button className="size-btn size-btn-active" type="button">S</button>
                        <button className="size-btn" type="button">M</button>
                    </div>
                    <p className="color-label">color:</p>
                    <div className="color-container">
                        <button style={{ backgroundColor: '#D3D2D5' }}
                            type="button"
                            className="color-btn"></button>
                        <button style={{ backgroundColor: '#2B2B2B' }}
                            type="button"
                            className="color-btn color-btn-active"></button>
                        <button style={{ backgroundColor: '#0F6450' }}
                            type="button"
                            className="color-btn"></button>
                    </div>
                </>
            </div>
        </div>
      </div>
      </>
    )
  };
};

export default ProductPage;