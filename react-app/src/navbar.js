import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './navbar.css';

export default class Navba extends Component {
    render() {
        return (
            <div>
                <div className="nav">
                    <div className="logo" style={{ cursor: "pointer" }} onClick="location.href='/abt';" >
                        <Link className="logoLink" to="/" id="logo">
                            Beacon-UI
                        </Link>
                    </div>
                    <div className="links">
                        <div className="btnRow">
                            <div className="btnCol">
                                <button id="btn2">Register</button>
                            </div>
                            <div className="btnCol">
                                <button id="btn1">Log In</button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>



        );
    }
}