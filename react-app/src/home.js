import React from 'react';
import './home.css';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import OrderTab from "./orderTab";
import Open from "./open";
import Asks from './asks';
import Bids from './bids';
import TradeHistory from './tradeHistory';
import Coin from './coin';

export default class Home extends React.Component{
    render() {
        return (
            <div>
                <div className="room">
                    <div className="coin">
                        <Coin/>
                    </div>
                    <div className="trade">
                        
                        <div className="row1">
                            <TradingViewWidget
                                symbol="NASDAQ:AAPL"
                                theme={Themes.DARK}
                                locale="fr"
                                autosize className="chart"
                            />
                        </div>
                        <div className="row2">
                            <div className="orderPage">
                                <div className="order">
                                    <Open/>
                                </div>
                                <div className="market">
                                    <OrderTab/>
                                </div>
                            </div>
                        </div>
                        <div className="row2">
                            <div className="orderPage">
                                <div className="bids1">
                                    <Asks/>
                                </div>
                                <div className="bids2">
                                    <Bids/>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row2 order">
                                <TradeHistory/>
                        </div>
                        
                    </div>
              </div>
          </div>  
        );
    }
}