//Core
import { useEffect, Suspense } from "react";
import { useAppDispatch } from "engine/redux/hooks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Actions
import { restoreCartFromLocalStorage } from "engine/redux/slices/cartSlice";
import { setCurrencySelected } from "engine/redux/slices/headerSlice";

//Components
import Layout from "ui/components/Layout";
import ErrorBoundary from "ui/components/ErrorBoundary"
import Spinner from "ui/components/Spinner";

//Engine
import { routes } from "engine/config/routes";

//Styles
import { ThemeProvider } from "react-jss";
import theme from "theme";

const App: React.FC = () => {

  const dispatch = useAppDispatch();

  // SAVE AND RESTORE LOCAL STORAGE
  useEffect(() => {
    const cartItemsFromLocalStorage = window.localStorage.getItem("CART_ITEMS");
    if (cartItemsFromLocalStorage !== null) {
      dispatch(restoreCartFromLocalStorage(JSON.parse(cartItemsFromLocalStorage)));
    }

    const currencySelectedFromLocalStorage = window.localStorage.getItem("CURRENCY_SELECTED");
    if (currencySelectedFromLocalStorage !== null) {
      dispatch(setCurrencySelected(JSON.parse(currencySelectedFromLocalStorage)));
    }
  }, []);


  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Router>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                {routes.map(({ path, element }) =>
                  <Route
                    path={path}
                    element={element}
                    key={path}
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