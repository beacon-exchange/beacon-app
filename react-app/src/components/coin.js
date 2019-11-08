import React, { Component } from 'react';
import Axios from 'axios';
import Table from "react-bootstrap/Table";
import ReactNbsp from 'react-nbsp'

import './coin.css';




export default class Coin extends Component{

    constructor(props) {
        super(props);
        this.state = {
            coins: [],
            coin: "",
        }
    }
    componentDidMount() {
        Axios.get("https://api.coincap.io/v2/markets").then(
            res => {
                let m = [];
                let z = [];
                m = res.data;
                for (let i in m.data) {
                    z.push({
                        exchangeId: m.data[i].exchangeId,
                        rank: m.data[i].rank,
                        baseSymbol: m.data[i].baseSymbol,
                        baseId: m.data[i].baseId,
                        quoteSymbol: m.data[i].quoteSymbol,
                        quoteId: m.data[i].quoteId,
                        priceQuote: m.data[i].priceQuote,
                        priceUsd: m.data[i].priceUsd,
                        volumeUsd24Hr: m.data[i].volumeUsd24Hr / 1000,
                        percentExchangeVolume: m.data[i].percentExchangeVolume,
                        tradesCount24Hr: m.data[i].tradesCount24Hr,
                        updated: m.data[i].updated
                    });
                }
                this.setState({ coins: z });
                

            }).catch(e => {
            console.log(e);
        })
        }
    render() {
        let y = [];
        for (let i in this.state.coins) {
            if //(5 > 4){
                (this.state.coins[i].baseSymbol === this.props.coin) {
                y.push({
                    exchangeId: this.state.coins[i].exchangeId,
                    rank: this.state.coins[i].rank,
                    baseSymbol: this.state.coins[i].baseSymbol,
                    baseId: this.state.coins[i].baseId,
                    quoteSymbol: this.state.coins[i].quoteSymbol,
                    quoteId: this.state.coins[i].quoteId,
                    priceQuote: parseFloat(this.state.coins[i].priceQuote) ,
                    priceUsd: parseFloat(this.state.coins[i].priceUsd),
                    volumeUsd24Hr: parseFloat(this.state.coins[i].priceQuote).toFixed(1) ,
                    percentExchangeVolume: parseFloat(this.state.coins[i].percentExchangeVolume),
                    tradesCount24Hr: parseFloat(this.state.coins[i].tradesCount24Hr),
                    updated: this.state.coins[i].updated
                });
            }
        }
        return (
            <div className = "tabler">
                
                
                    <Table  id = "coinList">
                          <thead>
                        <tr>
                            <th colSpan="0px">Coin</th>
                            <th colSpan="0px">Price</th>
                            <th colSpan="0px"> Vol </th>
                            <th colSpan="0px">Change%</th>
                            </tr>
                    </thead>

                    <tbody>
                        {y.map((y, index)=> {
                            return (
                                <tr key={index}>
                                    <td>{y.quoteSymbol}</td>
                                    <td>{y.priceQuote }</td>
                                    <td>{y.tradesCount24Hr}</td>
                                    <td>{y.volumeUsd24Hr}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
          </div>  
        );
    }
}