//Core
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Actions
import { restoreCartFromLocalStorage } from "src/redux/features/cartSlice";
import { toggleCurrencySelector, changeCurrency } from "src/redux/features/headerSlice";

//Components
import Header from "src/ui/components/header/header";
import CartModal from "src/ui/components/cartModal/cartModal";
import CurrencySelector from "src/ui/components/currencySelector/currencySelector";

//Pages
import CategoryPage from "src/ui/pages/categoryPage/categoryPage";
import CartPage from "src/ui/pages/cartPage/cartPage";
import ProductPage from "src/ui/pages/productPage/productPage";
import Page404 from "src/ui/pages/404/page404";

//Utils
import ErrorBoundary from "src/utils/errorBoundary";
import ScrollToTop from "src/utils/scrollToTop";


function App() {

    /* STATE */
    const dispatch = useDispatch();
    const { currencySelectorOpened } = useSelector(state => state.header);
    /* STATE */

    /* SAVING DATA TO LOCAL STORAGE */
    useEffect(() => {

        const cartItemsFromLocalStorage = window.localStorage.getItem("CART_ITEMS");
        const currencySelectedFromLocalStorage = window.localStorage.getItem("CURRENCY_SELECTED");
        if (cartItemsFromLocalStorage !== null) {
            dispatch(restoreCartFromLocalStorage(JSON.parse(cartItemsFromLocalStorage)));
        };

        if (currencySelectedFromLocalStorage !== null) {
            dispatch(changeCurrency(JSON.parse(currencySelectedFromLocalStorage)));
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    /* SAVING DATA TO LOCAL STORAGE */


    return (
        <ErrorBoundary>
            <Router>
                <div onClick={() => { if (currencySelectorOpened) dispatch(toggleCurrencySelector(false)) }}>
                    <div
                        className="app"
                        style={{
                            padding: "0 100px",
                            maxWidth: "1440px",
                            margin: "0 auto",
                        }}>
                        <Header />
                        <CurrencySelector />
                        <CartModal />
                        <ScrollToTop>
                            <Routes>
                                <Route path="/" element={<CategoryPage />} />
                                <Route path="/cart" element={<CartPage />} />
                                <Route path="/product/:productId" element={<ProductPage />} />
                                <Route path="*" element={<Page404 />} />
                            </Routes>
                        </ScrollToTop>
                    </div>
                </div>
            </Router>
        </ErrorBoundary >
    );
};

export default App;