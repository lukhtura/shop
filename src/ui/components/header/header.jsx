//Core

//Components
import Link from "../link/link";

//Styles
import "./header.css";

function Header(props) {

  const {openCartModal} = props;
 
  return (
    <header className="header">
      <div className="header-links">
        <Link text={"WOMEN"}></Link>
        <Link text={"MEN"}></Link>
        <Link text={"KIDS"}></Link>
      </div>

      <img
        src={require("../../../assets/img/green-logo.svg").default}
        alt="logotype"
        className="logo"
      />

      <div className="header-buttons">
        <div className="currency-select" >
          <img
            src={require("../../../assets/icons/dollar.svg").default}
            alt="dollar"
            style={{ width: "12px" }}
          />
          <img
            src={require("../../../assets/icons/selector-arrow.svg").default}
            alt="cart"
            style={{ width: "6px" }}
          />
        </div>
        <div className="cart-button" onClick={openCartModal}>
          <img
            src={require("../../../assets/icons/cart-icon.svg").default}
            alt="cart"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
