//Core
import { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@apollo/client';

//Actions
import { categoriesFetch, activeCategoryChange } from 'src/redux/features/productsSlice';
import { toggleCartModal, toggleCurrencySelector } from 'src/redux/features/headerSlice';

//API
import { GET_ALL_CATEGORIES } from 'src/api/products';

//Components
import Spinner from 'src/ui/components/spinner/Spinner';
import ErrorMessage from 'src/ui/components/errorMessage/errorMessage';

//Styles
import 'src/ui/components/header/header.scss';
import cartImg from 'src/assets/icons/cart-icon.svg';
import logo from 'src/assets/img/green-logo.svg';
import currencySelectorArrow from 'src/assets/icons/selector-arrow.svg';

function Header() {

    const dispatch = useDispatch();
    const { data, loading, error } = useQuery(GET_ALL_CATEGORIES);
    const { cartModalOpened, currencySelectorOpened, currencySelected } = useSelector(state => state.header);
    const quantity = useSelector(state => state.cart.quantity);
    const { categories, activeCategory } = useSelector(state => state.products);

    useEffect(() => {
        if (!loading && !error) {
            dispatch(categoriesFetch(data.categories));
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loading]);

    if (loading) {
        return <Spinner />;
    } else if (error) {
        return <ErrorMessage />
    };

    const renderCategories = (arr) => {
        return arr.map(item =>
            <RouterLink key={item.name} className='category-btn' to={'./'} >
                <div
                    onClick={() => {
                        if (activeCategory !== item.name) {
                            dispatch(activeCategoryChange(item.name));
                        };
                    }}
                    key={item.name} >{item.name.toUpperCase()}
                </div >
            </RouterLink>
        );
    };

    return (
        <header className='header'>
            <div className='header__inner'>
                <div className='header__inner-categories'>
                    {renderCategories(categories)}
                </div>
                <RouterLink to={'./'} style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={logo}
                        alt='logotype'
                        className='header__inner-logo'
                    />
                </RouterLink>
                <div className='header__inner-buttons'>
                    <div onClick={() => dispatch(toggleCurrencySelector(!currencySelectorOpened))} className='currency-selector-button'>
                        <div>
                            {currencySelected.symbol}
                        </div>
                        <div>
                            <img
                                src={currencySelectorArrow}
                                alt="selector"
                                style={{ width: '10px' }} />
                        </div>
                    </div>
                    <div className='cart-button'
                        onClick={() => dispatch(toggleCartModal(!cartModalOpened))}>
                        <img
                            src={cartImg}
                            alt='cart'
                        />
                        {quantity > 0 ? <div className='cart-button-counter'>{quantity}</div> : null}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
