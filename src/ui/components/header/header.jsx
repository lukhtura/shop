//Core
import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@apollo/client";

//Actions
import { categoriesFetch, activeCategoryChange } from "src/redux/features/productsSlice";
import { toggleCartModal, toggleCurrencySelector } from "src/redux/features/headerSlice";

//API
import { GET_ALL_CATEGORIES } from "src/api/products";

//Components
import Spinner from "src/ui/components/spinner/Spinner";
import ErrorMessage from "src/ui/components/errorMessage/errorMessage";

//Styles
import { useStyles } from "./styles";
import cartImg from "src/assets/icons/cart-icon.svg";
import logo from "src/assets/img/green-logo.svg";
import currencySelectorArrow from "src/assets/icons/selector-arrow.svg";

function Header() {

    /* STYLES */
    const classes = useStyles();
    /* STYLES */

    /* STATE */
    const dispatch = useDispatch();
    const { cartModalOpened, currencySelectorOpened, currencySelected } = useSelector(state => state.header);
    const { categories, activeCategory } = useSelector(state => state.products);
    const quantity = useSelector(state => state.cart.quantity);
    /* STATE */

    /* API */
    const { data, loading, error } = useQuery(GET_ALL_CATEGORIES);
    /* API */


    useEffect(() => {
        if (!loading && !error) {
            dispatch(categoriesFetch(data.categories));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);


    /* CHECK */
    if (loading) {
        return <Spinner />;
    } else if (error) {
        return <ErrorMessage />
    };
    /* CHECK */


    const renderCategoryButtons = (arr) => {
        return arr.map(item =>
            <RouterLink key={item.name} className={classes.categoryInner} to={"./"} >
                <div className={classes.category}
                    onClick={() => {
                        if (activeCategory !== item.name) {
                            dispatch(activeCategoryChange(item.name));
                        };
                    }}
                    key={item.name} >{item.name.toUpperCase()}
                </div>
            </RouterLink>
        );
    };



    return (

        <header className={classes.header}>

            <div className={classes.inner}>

                {/* CATEGORIES */}
                <div className={classes.categoriesContainer}>
                    {renderCategoryButtons(categories)}
                </div>

                {/* LOGO */}
                <RouterLink to={"./"} className={classes.logo}>
                    <img
                        src={logo}
                        alt="logotype"
                    />
                </RouterLink>

                {/* CURRENCY SELECTOR AND CART */}
                <div className={classes.buttonsContainer}>

                    {/* CURRENCY SELECTOR */}
                    <div onClick={() => dispatch(toggleCurrencySelector(!currencySelectorOpened))} className={`${classes.currencySelectorBtn} ${classes.btn}`}>


                        <div>
                            {currencySelected.symbol}
                        </div>

                        <div className={currencySelectorOpened
                            ? classes.currencyArrowRotated
                            : classes.currencyArrow} >
                            <img
                                src={currencySelectorArrow}
                                alt="selector"
                                className={classes.currencyArrowImg} />
                        </div>

                    </div>

                    {/* CART */}
                    <div className={`${classes.cartBtn} ${classes.btn}`}
                        onClick={() => dispatch(toggleCartModal(!cartModalOpened))}>

                        <img
                            src={cartImg}
                            alt="cart"
                        />

                        {/* COUNTER */}
                        {quantity > 0 ? <div className={classes.cartBtnCounter}>{quantity}</div> : null}

                    </div>


                </div>

            </div>

        </header>

    );
};

export default Header;
