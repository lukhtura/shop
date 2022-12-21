//Core
import { Link as RouterLink } from "react-router-dom";

//Actions
import { useDispatch, useSelector } from "react-redux";
import { toggleCartModal, toggleSelector } from "./headerSlice";

//Components
import Link from "../link/link";

//Styles
import "./header.scss";
import currencyImg from '../../../assets/icons/dollar.svg';
import cartImg from '../../../assets/icons/cart-icon.svg';
import logo from "../../../assets/img/green-logo.svg";


function Header() {

    const dispatch = useDispatch();
    const { cartModalOpened, selectorOpened } = useSelector(state => state.header);
    const { qty } = useSelector(state => state.cart)

    return (
        <header className="header">
            <div className="header__inner">
                <div className="header__inner-links">
                    <Link text={"WOMEN"}></Link>
                    <Link text={"MEN"}></Link>
                    <Link text={"KIDS"}></Link>
                </div>

                <RouterLink to={'./'} style={{ display: "flex", alignItems: 'center' }}>
                    <img
                        src={logo}
                        alt="logotype"
                        className="header__inner-logo"
                    />
                </RouterLink>

                <div className="header__inner-buttons">
                    <div className="currency-selector">
                        <img
                            onClick={() => dispatch(toggleSelector(!selectorOpened))}
                            src={currencyImg}
                            alt="dollar"
                        />
                    </div>
                    <div className="cart-button">
                        <img
                            onClick={() => dispatch(toggleCartModal(!cartModalOpened))}
                            src={cartImg}
                            alt="cart"
                        />
                        {qty > 0 ? <div onClick={() => dispatch(toggleCartModal(!cartModalOpened))} className="cart-button-counter">{qty}</div> : null}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
