//Core
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";

//Actions
import { toggleCurrencySelector, changeCurrency } from "src/redux/slices/headerSlice";

//API
import { GET_ALL_CURRENCIES } from "src/api/currencies";

//Components
// eslint-disable-next-line no-unused-vars
import Spinner from "src/ui/components/Spinner";
// eslint-disable-next-line no-unused-vars
import ErrorMessage from "src/ui/components/ErrorMessage";

//Styles
import { useStyles } from "./styles";

function DropdownContent() {

  /* STATE */
  const dispatch = useDispatch();
  const currencySelectorOpen = useSelector(state => state.header.currencySelectorOpen);
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
        dispatch(changeCurrency({ label: item.label, symbol: item.symbol }));
        dispatch(toggleCurrencySelector(false));
      }}
    >
      {item.symbol} {item.label}
    </div>
  ));

  if (!loading) {
    return (
      <div
        className={currencySelectorOpen ? `${classes.selector} ${classes.show}` : classes.selector}
        onClick={e => e.stopPropagation()}
      >
        <div className={classes.inner}>
          {renderCurrencies(data)}
        </div>
      </div >
    );
  }
}

export default DropdownContent;