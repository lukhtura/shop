//Core
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//Actions
import { restoreCartFromLocalStorage } from "../../../redux/features/cartSlice";
import { changeCurrency } from "../../../redux/features/headerSlice";

//Components
import Header from "../header/header";
import CartModal from "../cartModal/cartModal";
import CurrencySelector from "../currencySelector/currencySelector";

//Pages
import CategoryPage from '../../pages/categoryPage/categoryPage';
import CartPage from './../../pages/cartPage/cartPage';
import ProductPage from "../../pages/pdp/productPage";
import Page404 from "../../pages/404/page404";

//helpers
import ErrorBoundary from "../../../utils/errorBoundary";
import ScrollToTop from "../../../utils/scrollToTop";

//Styles
import './app.css';


function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        const cartItemsFromLocalStorage = window.localStorage.getItem('CART_ITEMS');
        const currencySelectedFromLocalStorage = window.localStorage.getItem('CURRENCY_SELECTED');
        if (cartItemsFromLocalStorage !== null) {
            dispatch(restoreCartFromLocalStorage(JSON.parse(cartItemsFromLocalStorage)));
        }

        if (currencySelectedFromLocalStorage !== null) {
            dispatch(changeCurrency(JSON.parse(currencySelectedFromLocalStorage)));
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <ErrorBoundary>
            <Router>
                <div className="app">
                    <Header />
                    <CurrencySelector />
                    <CartModal />
                    <ScrollToTop>
                        <Routes>
                            <Route path='/' element={<CategoryPage />} />
                            <Route path='/cart' element={<CartPage />} />
                            <Route path='/product/:productId' element={<ProductPage />} />
                            <Route path='*' element={<Page404 />} />
                        </Routes>
                    </ScrollToTop>
                </div>
            </Router>
        </ErrorBoundary>
    );
}

export default App;