//Core
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";

//Actions
import { setIsCurrencySelectorOpen, setCurrencySelected } from "src/redux/slices/headerSlice";

//API
import { GET_ALL_CURRENCIES } from "src/api/currencies";

//Styles
import { useStyles } from "./styles";

function DropdownContent() {

  /* STATE */
  const dispatch = useDispatch();
  const isCurrencySelectorOpen = useSelector(state => state.header.isCurrencySelectorOpen);
  /* STATE */

  /* API*/
  const { data, loading } = useQuery(GET_ALL_CURRENCIES);
  /* API*/

  /* STYLES */
  const classes = useStyles();
  /* STYLES */

  const renderCurrencies = (arr) => arr.currencies.map(item => (
    <div
      className={classes.item}
      key={item.label}
      onClick={() => {
        dispatch(setCurrencySelected({ label: item.label, symbol: item.symbol }));
        dispatch(setIsCurrencySelectorOpen(false));
      }}
    >
      {item.symbol} {item.label}
    </div>
  ));



  if (!loading && isCurrencySelectorOpen) return (
    <div
      className={classes.selector}
      onClick={e => e.stopPropagation()}
    >
      <div className={classes.inner}>
        {renderCurrencies(data)}
      </div>
    </div >
  );
}

export default DropdownContent;