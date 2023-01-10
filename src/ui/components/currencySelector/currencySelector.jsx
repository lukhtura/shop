//Core
import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
//Actions
import { toggleSelector, changeCurrency } from '../../../redux/features/headerSlice';
//Queries
import { GET_ALL_CURRENCIES } from '../../../api/currencies';
//Components
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/errorMessage';
//Styles
import './currencySelector.scss';


const CurrencySelector = () => {

    const dispatch = useDispatch();
    const selectorOpened = useSelector(state => state.header.selectorOpened);
    const { data, loading, error } = useQuery(GET_ALL_CURRENCIES);

    const renderCurrencies = (arr) => {
        return arr.currencies.map(item => {
            return (
                <div
                    key={item.label}
                    onClick={() => {
                        dispatch(changeCurrency({ label: item.label, symbol: item.symbol }));
                        dispatch(toggleSelector(false));
                    }}
                    className="currency-selector-inner-item">{item.symbol} {item.label}
                </div>
            )
        })
    }

    if (loading) {
        return <Spinner />
    } else if (error) {
        return <ErrorMessage />
    }

    let classNames = 'selector-overflow hide';
    selectorOpened ? classNames = 'selector-overflow' : classNames = 'selector-overflow hide';

    return (
        <div
            onClick={() => dispatch(toggleSelector(false))}
            className={classNames}>
            <div onClick={e => e.stopPropagation()} className='currency-selector'>
                <div className="currency-selector-inner">
                    {renderCurrencies(data)}
                </div>
            </div>
        </div>
    );
}

export default CurrencySelector; 