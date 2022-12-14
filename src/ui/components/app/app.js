//Core
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Header from "../header/header";
import CartModal from "../cartModal/cartModal";
import CategoryPage from '../../pages/categoryPage/categoryPage';
import CartPage from './../../pages/cartPage/cartPage';
import ProductPage from "../../pages/pdp/productPage";
import ScrollToTop from "../scrollToTop/scrollToTop";

//Styles
import './app.css'

function App() {

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