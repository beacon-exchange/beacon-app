import React, { Component } from 'react';
import './open.css';
export default class MyTrades extends Component {
    render() {
        return (
            <div>
                <div className="title">
                    <div className="titleRow">
                        MY TRADES
                    </div>
                </div>
                <div className="table">
                    <div className="column">
                        Date
                    </div>
                    <div className="column">
                        Type
                    </div>
                    <div className="column">
                        Price<br/>(ETH)
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