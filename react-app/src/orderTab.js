import React, { Component } from 'react';
import './orderTab.css';
import Buy from './buy';
import Sell from './sell';

export default class OrderTab extends Component{
    constructor(props) {
        super(props);
        this.state = {
            orderType: true,
            buyview: "visible",
            sellview: "hidden",
            buyBorder: "1px solid yellow",
            sellBorder:"none",
        }
        this.sell = this.sell.bind(this);
        this.buy = this.buy.bind(this);
    }
    buy() {
        this.setState({
            orderType: true,
            sellBorder:"none",
            buyBorder:"1px solid yellow"
        });
    }
    sell() {
        this.setState({
            orderType: false,
            buyBorder: "none",
            sellBorder:"1px solid yellow",
        });
    }
    render() {
        let order;
        if (this.state.orderType) {
            order = <div><Buy/></div>;
            //  order = <Buy />;
        } else {
            order = <div><Sell /></div>;
            //  order = <Sell />;
        }
        return (

            <div>
                <div className="tab">
                    <button onClick={this.buy} style={{borderBottom:this.state.buyBorder}}>Buy</button>
                    <button onClick={this.sell} style={{borderBottom:this.state.sellBorder}}>Sell</button>
                </div>
                {order}
            </div>
            
        );
    }
}