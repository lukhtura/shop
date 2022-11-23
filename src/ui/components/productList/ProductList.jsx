//Components
import ProductCard from "../productCard/productCard";

//Style
import './productList.css'

const ProductList = (props) => {


    return (
        <div className="product-list">
            {props.data
                .map(item => <ProductCard
                    inStock={item.inStock}
                    // ref={this.setCardRefs}
                    key={item.id}
                    name={item.name}
                    price={item.prices[0].amount}
                    image={item.gallery[0]}
                />)}
        </div>
    );
};

export default ProductList;