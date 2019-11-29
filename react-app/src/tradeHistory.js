import React, { Component } from 'react';
import './history.css';
import MarketTrades from './marketTrades';
import MyTrades from './myTrades';
// import Asks from './asks';
// import Bids from './bids';

export default class TradeHistory extends Component{
    render() {
        return (
            <div>
                    <div className="history">
                        TRADE HISTORY
                    </div>
                    <div className="historytab">
                        <div className="mytrades">
                            <MarketTrades/>
                        </div>
                        <div className="mymarkets">
                            <MyTrades/>
                        </div>
                    </div>     
            </div>  
        );
    }
}