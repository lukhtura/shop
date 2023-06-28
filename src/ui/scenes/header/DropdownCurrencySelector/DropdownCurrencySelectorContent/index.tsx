//Core
import { useAppDispatch, useAppSelector } from "engine/redux/hooks";
import { useQuery } from "@apollo/client";

//Actions
import { setIsCurrencySelectorOpen, setCurrencySelected } from "engine/redux/slices/headerSlice";

//API
import { GET_ALL_CURRENCIES } from "api/queries/currencies";

//Types
import { Currency } from "engine/types/products";

//Styles
import useDropdownCurrencySelectorContentStyles from "ui/scenes/header/DropdownCurrencySelector/DropdownCurrencySelectorContent/styles";

interface CurrenciesData {
  currencies: Currency[]
}

const DropdownCurrencySelectorContent: React.FC = () => {

  const dispatch = useAppDispatch();
  const isCurrencySelectorOpen = useAppSelector(state => state.header.isCurrencySelectorOpen);

  const { data, loading, error } = useQuery<CurrenciesData>(GET_ALL_CURRENCIES);

  const classNames = useDropdownCurrencySelectorContentStyles();

  function setCurrencyAndCloseSelector(currency: Currency): void {
    dispatch(setCurrencySelected({ label: currency.label, symbol: currency.symbol }));
    dispatch(setIsCurrencySelectorOpen(false));
  }

  function renderCurrencies(data: CurrenciesData): JSX.Element[] | null {

    if (data.currencies.length > 0) {
      return data.currencies.map(currency => (
        <div
          className={classNames.item}
          key={currency.label}
          onClick={() => setCurrencyAndCloseSelector(currency)}
        >
          {currency.symbol} {currency.label}
        </div>
      ));
    }

    return null;
  }

  if (!loading && !error && isCurrencySelectorOpen && data) return (
    <div
      className={classNames.selector}
    >
      <div className={classNames.inner}>
        {renderCurrencies(data)}
      </div>
    </div >
  );

  return null;
}

export default DropdownCurrencySelectorContent;