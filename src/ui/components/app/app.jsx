//Core
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Actions
import { restoreCartFromLocalStorage } from "src/redux/slices/cartSlice";
import { setCurrencySelected } from "src/redux/slices/headerSlice";

//Components
import Layout from "src/ui/components/Layout";
import ErrorBoundary from "src/ui/components/ErrorBoundary";

//Engine
import { pages } from "src/engine/config/routes";



function App() {

  /* STATE */
  const dispatch = useDispatch();
  /* STATE */

  /* SAVE AND RESTORE LOCAL STORAGE */
  useEffect(() => {
    const cartItemsFromLocalStorage = window.localStorage.getItem("CART_ITEMS");
    if (cartItemsFromLocalStorage !== null) {
      dispatch(restoreCartFromLocalStorage(JSON.parse(cartItemsFromLocalStorage)));
    }

    const currencySelectedFromLocalStorage = window.localStorage.getItem("CURRENCY_SELECTED");
    if (currencySelectedFromLocalStorage !== null) {
      dispatch(setCurrencySelected(JSON.parse(currencySelectedFromLocalStorage)));
    }
  }, [dispatch]);
  /* SAVE AND RESTORE LOCAL STORAGE */

  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {pages.map(page =>
              <Route
                path={page.path}
                element={page.element}
                key={page.element}
              />)}
          </Route>
        </Routes>
      </Router>
    </ErrorBoundary >
  );
}

export default App;