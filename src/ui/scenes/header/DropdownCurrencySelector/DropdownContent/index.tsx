//Core
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";

//Actions
import { setIsCurrencySelectorOpen, setCurrencySelected } from "engine/redux/slices/headerSlice";

//API
import { GET_ALL_CURRENCIES } from "api/queries/currencies";

//Styles
import { useStyles } from "./styles";



function DropdownContent() {

  const dispatch = useDispatch();
  const isCurrencySelectorOpen = useSelector(state => state.header.isCurrencySelectorOpen);

  const { data, loading, error } = useQuery(GET_ALL_CURRENCIES);

  const classNames = useStyles();

  function setCurrencyAndCloseSelector(currency) {
    dispatch(setCurrencySelected({ label: currency.label, symbol: currency.symbol }));
    dispatch(setIsCurrencySelectorOpen(false));
  }

  const renderCurrencies = (data) => data.currencies.map(currency => (
    <div
      className={classNames.item}
      key={currency.label}
      onClick={() => setCurrencyAndCloseSelector(currency)}
    >
      {currency.symbol} {currency.label}
    </div>
  ));



  if (!loading && !error && isCurrencySelectorOpen) return (
    <div
      className={classNames.selector}
      onClick={e => e.stopPropagation()}
    >
      <div className={classNames.inner}>
        {renderCurrencies(data)}
      </div>
    </div >
  );
}

export default DropdownContent;