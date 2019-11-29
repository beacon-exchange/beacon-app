import React, { Component } from 'react';
import './open.css';
export default class Asks extends Component {
    render() {
        return (
            <div>
                <div className="title">
                    <div className="titleRow">
                        <div className="col1">
                            ASKS
                        </div>
                        <div className="col2">
                            Total: 5426504.40029932 IDEX
                        </div>
                    </div>
                </div>
                <div className="table">
                    <div className="column">
                        Price
                    </div>
                    <div className="column">
                        Idex
                    </div>
                    <div className="column">
                        Eth
                    </div>
                    <div className="column">
                        Sum
                    </div>
                    
                </div>
            </div>
        );
    }
}