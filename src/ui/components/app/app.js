//Core
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Components
import Header from "../header/header";
import CartModal from "../cartModal/cartModal";
import CategoryPage from '../../pages/category/categoryPage';

//Styles
import './app.css'

function App() {

    const [showModalCart, setShowMoodalCart] = useState(false);

    const openCartModal = () => {
        setShowMoodalCart(true);
    };

    return (
        <Router>
            <div className="app">
                <Header cartStatus={showModalCart} openCartModal={openCartModal} />
                <CartModal show={showModalCart}/>
                <Routes>
                    <Route path='/' element={<CategoryPage />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;