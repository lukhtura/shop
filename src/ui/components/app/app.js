//Core
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

//Actions
import { restoreFromLocalStorage } from "../../../redux/features/cartSlice";

//Components
import Header from "../header/header";
import CartModal from "../cartModal/cartModal";
import CategoryPage from '../../pages/categoryPage/categoryPage';
import CartPage from './../../pages/cartPage/cartPage';
import ProductPage from "../../pages/pdp/productPage";

//helpers
import ScrollToTop from "../../../helpers/scrollToTop";

//Styles
import './app.css';


function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        const cartItemsFromLocalStorage = window.localStorage.getItem('CART_ITEMS');
        if (cartItemsFromLocalStorage !== null) {
            dispatch(restoreFromLocalStorage(JSON.parse(cartItemsFromLocalStorage)));
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <Router>
            <div className="app">
                <Header />
                <CartModal />
                <ScrollToTop>
                    <Routes>
                        <Route path='/' element={<CategoryPage />} />
                        <Route path='/cart' element={<CartPage />} />
                        <Route path='/product/:productId' element={<ProductPage />} />
                    </Routes>
                </ScrollToTop>
            </div>
        </Router>
    );
};

export default App;