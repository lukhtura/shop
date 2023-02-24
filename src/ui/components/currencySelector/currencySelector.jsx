//Core
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@apollo/client";

//Actions
import { toggleCurrencySelector, changeCurrency } from "src/redux/features/headerSlice";

//API
import { GET_ALL_CURRENCIES } from "src/api/currencies";

//Components
import Spinner from "src/ui/components/spinner/Spinner";
import ErrorMessage from "src/ui/components/errorMessage/errorMessage";

//Styles
import { useStyles } from "./styles";

const CurrencySelector = () => {

    /* STATE */
    const dispatch = useDispatch();
    const currencySelectorOpened = useSelector(state => state.header.currencySelectorOpened);
    /* STATE */

    /* GET DATA */
    const { data, loading, error } = useQuery(GET_ALL_CURRENCIES);
    /* GET DATA */

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

    if (loading) {
        return <Spinner />
    } else if (error) {
        return <ErrorMessage />
    };

    return (
        <div
            className={currencySelectorOpened ? classes.selector + ' ' + classes.open : classes.selector}
            onClick={e => e.stopPropagation()}
        >
            <div className={classes.inner}>
                {renderCurrencies(data)}
            </div>
        </div >
    );
};

export default CurrencySelector;