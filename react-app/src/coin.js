import React, { Component } from 'react';
import './coin.css';

export default class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btc: "#5c80bc",
            eth: "#e8eef2",
            tusd: "#e8eef2",
            usdc: "#e8eef2",
            eurs: "#e8eef2",
            dai: "#e8eef2",
        }
        this.tab = this.tab.bind(this);
    }

    tab(event) {
        if (event.target.value === "btc") {
            this.setState({
                btc: "#5c80bc",
                eth: "#e8eef2",
                tusd: "#e8eef2",
                usdc: "#e8eef2",
                eurs: "#e8eef2",
                dai: "#e8eef2",
            });
        } else if (event.target.value === "eth") {
            this.setState({
                btc: "#e8eef2",
                eth: "#5c80bc",
                tusd: "#e8eef2",
                usdc: "#e8eef2",
                eurs: "#e8eef2",
                dai: "#e8eef2",
            });
        } else if (event.target.value === "tusd") {
            this.setState({
                btc: "#e8eef2",
                eth: "#e8eef2",
                tusd: "#5c80bc",
                usdc: "#e8eef2",
                eurs: "#e8eef2",
                dai: "#e8eef2",
            });
        } else if (event.target.value === "usdc") {
            this.setState({
                btc: "#e8eef2",
                eth: "#e8eef2",
                tusd: "#e8eef2",
                usdc: "#5c80bc",
                eurs: "#e8eef2",
                dai: "#e8eef2",
            });
        } else if (event.target.value === "eurs") {
            this.setState({
                btc: "#e8eef2",
                eth: "#e8eef2",
                tusd: "#e8eef2",
                usdc: "#e8eef2",
                eurs: "#5c80bc",
                dai: "#e8eef2",
            });
        } else if (event.target.value === "dai") {
            this.setState({
                btc: "#e8eef2",
                eth: "#e8eef2",
                tusd: "#e8eef2",
                usdc: "#e8eef2",
                eurs: "#e8eef2",
                dai: "#5c80bc",
            });
        }
    }
    render() {
        return (
            <div>
                <div className="coinMarkets">
                    Markets
                </div>
                <div className="coin-tabs">
                    <div className="coin-column">
                        <button onClick={this.tab} style={{ backgroundColor: this.state.btc }} value={"btc"}> BTC</button>
                    </div>
                    <div className="coin-column">
                        <button onClick={this.tab} style={{ backgroundColor: this.state.eth }} value={"eth"}> ETH</button>
                    </div>
                    <div className="coin-column">
                        <button onClick={this.tab} style={{ backgroundColor: this.state.tusd }} value={"tusd"}> TUSD</button>
                    </div>
                    <div className="coin-column">
                        <button onClick={this.tab} style={{ backgroundColor: this.state.usdc }} value={"usdc"}> USDC</button>
                    </div>
                    <div className="coin-column">
                        <button onClick={this.tab} style={{ backgroundColor: this.state.eurs }} value={"eurs"}> EURS</button>
                    </div>
                    <div className="coin-column">
                        <button onClick={this.tab} style={{ backgroundColor: this.state.dai }} value={"dai"}> DAI</button>
                    </div>
                </div>
                <div className="cointrade">
                        <div className="cointrade-column">
                            Coin
                        </div>
                        
                        <div className="cointrade-column">
                            Price
                        </div>
                        <div className="cointrade-column">
                            Vol
                        </div>
                        <div className="cointrade-column">
                            Chg
                        </div>
                        <div className="cointrade-column">
                            Name
                        </div>
                    </div>
                </div>
                );
            }
}