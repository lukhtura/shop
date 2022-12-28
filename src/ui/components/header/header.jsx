//Core
import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";

//Actions
import { categoriesFetch, activeCategoryChange } from "../../../redux/features/productsSlice";
import { toggleCartModal, toggleSelector } from "../../../redux/features/headerSlice";

//Queries
import { GET_ALL_CATEGORIES } from "../../../query/products";

//Components
import Spinner from "../spinner/Spinner";

//Styles
import "./header.scss";
import currencyImg from '../../../assets/icons/dollar.svg';
import cartImg from '../../../assets/icons/cart-icon.svg';
import logo from "../../../assets/img/green-logo.svg";


function Header() {

    const dispatch = useDispatch();
    const { data, loading, error } = useQuery(GET_ALL_CATEGORIES);
    const { cartModalOpened, selectorOpened } = useSelector(state => state.header);
    const { quantity } = useSelector(state => state.cart);
    const { categories, activeCategory } = useSelector(state => state.products)

    useEffect(() => {
        if (!loading && !error) {
            dispatch(categoriesFetch(data.categories));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);

    if (loading) {
        return <Spinner />;
    } else if (error) {
        return <p>Error</p>
    };

    const renderCategories = (arr) => {
        return arr.map(item =>
            <RouterLink key={item.name} className="category-btn" to={'./'} >
                <div
                    onClick={() => {
                        if (activeCategory !== item.name) {
                            dispatch(activeCategoryChange(item.name));
                        };
                    }}
                    key={item.name} > {item.name.toUpperCase()}
                </div >
            </RouterLink>
        )
    };

    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__inner-categories">
                    {renderCategories(categories)}
                </div>
                <RouterLink to={'./'} style={{ display: "flex", alignItems: 'center' }}>
                    <img
                        src={logo}
                        alt="logotype"
                        className="header__inner-logo"
                    />
                </RouterLink>
                <div className="header__inner-buttons">
                    <div className="currency-selector">
                        <img
                            style={{ opacity: 0.3 }}
                            onClick={() => dispatch(toggleSelector(!selectorOpened))}
                            src={currencyImg}
                            alt="dollar"
                        />
                    </div>
                    <div className="cart-button">
                        <img
                            onClick={() => dispatch(toggleCartModal(!cartModalOpened))}
                            src={cartImg}
                            alt="cart"
                        />
                        {quantity > 0 ? <div onClick={() => dispatch(toggleCartModal(!cartModalOpened))} className="cart-button-counter">{quantity}</div> : null}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
