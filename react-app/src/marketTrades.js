import React, { Component } from 'react';
import './marketTrades.css';
export default class MarketTrades extends Component {
    render() {
        return (
            <div>
                <div className="trade-title">
                        MARKET TRADES
                </div>
                <div className="table">
                    <div className="column">
                        Date
                    </div>
                    <div className="column">
                        Type
                    </div>
                    <div className="column">
                        Price<br />(ETH)
                    </div>
                    <div className="column">
                        Amount
                    </div>
                    <div className="column">
                        Total
                    </div>

                </div>
            </div>
        );
    }
}