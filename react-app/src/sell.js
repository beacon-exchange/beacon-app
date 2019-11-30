import React, { Component } from 'react';


export default class Sell extends Component {
    render() {
        return (
            <div>
                <div className="column">
                    <div className="row">
                        <div className="first">
                            Type
                        </div>
                        <div className="second select-box1">
                            <select className="label select">
                                <option>Limit Order</option>
                                <option>Market</option>
                            </select>

                        </div>
                        <div className="third">

                        </div>
                    </div>
                    <div className="row">
                        <div className="first">
                            Price
                        </div>
                        <div className="second">
                            <input placeholder="000.00" />
                        </div>
                        <div className="third">
                            ETH
                        </div>
                    </div>
                    <div className="row">
                        <div className="first">
                            Amount
                        </div>
                        <div className="second">
                            <input placeholder="000.00" />
                        </div>
                        <div className="third">
                            IDEX
                        </div>
                    </div>
                    <div className="row">
                        <div className="first">
                            0.1%<br />Fee
                        </div>
                        <div className="second">
                            0
                        </div>
                        <div className="third">
                            IDEX
                        </div>
                    </div>
                    <div className="row">
                        <div className="first">
                            Total
                        </div>
                        <div className="second">
                            <input placeholder="000.00" />
                        </div>
                        <div className="third">
                            ETH
                        </div>
                    </div>
                    <div className="row">
                        <div className="first">

                        </div>
                        <div className="second">
                            <button className="sell">SELL</button>
                        </div>
                        <div className="third">

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}