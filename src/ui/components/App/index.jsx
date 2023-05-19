//Core
import { useEffect, Suspense } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Actions
import { restoreCartFromLocalStorage } from "engine/redux/slices/cartSlice";
import { setCurrencySelected } from "engine/redux/slices/headerSlice";

//Components
import Layout from "ui/components/Layout";
import ErrorBoundary from "ui/components/ErrorBoundary";

//Engine
import { routes } from "engine/config/routes";

//Styles
import { ThemeProvider } from "react-jss";
import { theme } from "./theme";

function App() {

  /*  */
  const dispatch = useDispatch();
  /*  */

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
      <ThemeProvider theme={theme}>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Layout />}>
                {routes.map(({ path, element }) =>
                  <Route
                    path={path}
                    element={element}
                    key={element}
                  />)}
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </ThemeProvider>
    </ErrorBoundary >
  );
}

export default App;