//Core
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
//Actions
import { toggleCurrencySelector, changeCurrency } from 'src/redux/features/headerSlice';
//API
import { GET_ALL_CURRENCIES } from 'src/api/currencies';
//Components
import Spinner from 'src/ui/components/spinner/Spinner';
import ErrorMessage from 'src/ui/components/errorMessage/errorMessage';
//Styles
import 'src/ui/components/currencySelector/currencySelector.scss';

const CurrencySelector = () => {

    const dispatch = useDispatch();
    const currencySelectorOpened = useSelector(state => state.header.currencySelectorOpened);
    const { data, loading, error } = useQuery(GET_ALL_CURRENCIES);

    const renderCurrencies = (arr) => {
        return arr.currencies.map(item => {
            return (
                <div
                    key={item.label}
                    onClick={() => {
                        dispatch(changeCurrency({ label: item.label, symbol: item.symbol }));
                        dispatch(toggleCurrencySelector(false));
                    }}
                    className='currency-selector-inner-item'>{item.symbol} {item.label}
                </div>
            );
        });
    };

    if (loading) {
        return <Spinner />
    } else if (error) {
        return <ErrorMessage />
    };

    let classNames = 'selector-overflow hide';
    currencySelectorOpened ? classNames = 'selector-overflow' : classNames = 'selector-overflow hide';

    return (
        <div
            onClick={() => dispatch(toggleCurrencySelector(false))}
            className={classNames}>
            <div onClick={e => e.stopPropagation()} className='currency-selector'>
                <div className='currency-selector-inner'>
                    {renderCurrencies(data)}
                </div>
            </div>
        </div>
    );
};

export default CurrencySelector; 