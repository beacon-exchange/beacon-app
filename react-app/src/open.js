import React, { Component } from 'react';
import './open.css';
export default class Open extends Component{
    render() {
        return (
            <div>
                <div className="title">
                    MY OPEN ORDERS
                </div>
                <div className="table">
                    <div className="column">
                        Type
                    </div>
                    <div className="column">
                        Price
                    </div>
                    <div className="column">
                        Amount
                    </div>
                    <div className="column">
                        Total
                    </div>
                    <div className="column">
                        Date
                    </div>
                    <div className="column">
                        Action
                    </div>
                </div>
            </div>
        );
    }
}