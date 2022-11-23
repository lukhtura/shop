//Core
import { Component } from "react";

//Styles
import './currencySelector.scss'


class CurrencySelector extends Component {

    handleToggle = (e) => {
        const { toggleCurSelect} = this.props;
        if (e.target.className === 'selector-overflow') {
            toggleCurSelect()
        };
    }


    render() {

        let classNames = 'selector-overflow hide';
        const { selectorShow } = this.props;
        selectorShow ? classNames = 'selector-overflow' : classNames = 'selector-overflow hide';

        return (
            <div className={classNames}
            onClick={this.handleToggle}>
                <div className='currency-selector'>
                    <div className="currency-selector-inner">
                        <div className="currency-selector-inner-item">$ USD</div>
                        <div className="currency-selector-inner-item">€ EUR</div>
                        <div className="currency-selector-inner-item">¥ JPY</div>
                    </div>
                </div>
            </div>
        )
    }
};

export default CurrencySelector; 