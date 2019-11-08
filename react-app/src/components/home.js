import  React, { Component } from 'react';

import Container from "react-bootstrap/Container";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Row from "react-bootstrap/Row";
import PropTypes from 'prop-types';
import Col from "react-bootstrap/Col";
import TradingViewWidget from 'react-tradingview-widget';
import Navbar from 'react-bootstrap/Navbar';
import "./home.css";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Tabs from "react-bootstrap/Tabs";
import Tab from 'react-bootstrap/Tab';
import Table from "react-bootstrap/Table";
import Coin from './coin';


const styles = {
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'right',
  },
 }

class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
        key: "ETH"
    }
    }


    coin() {
        alert("hello")
    }
    render() {
         const { classes } = this.props;
        return (
            <div>
                
                    <Row>
                        <Col xs={3} md={2} className= "home">

                            <Navbar bg="dark" expand="sm" className="nav">
                                <Nav className="mr-auto p-2" id="title">
                             <Nav.Link style={{color:"white", fontSize:'15px'}}>Markets</Nav.Link>
                                   
                                </Nav>
                                <Form.Check 
                                type="switch"
                                className="favs"
                                style={{color:"white", fontSize:'15px'}}
                                    id="custom-switch"
                                    label="Favorites"
                                  />
                                <Form inline id="form-group" id="search">

                                    <FormControl size="sm" type="text" placeholder="Search" className="form" />
                                </Form>
                            </Navbar>
                            <Tabs activeKey={this.state.key} id="controlled-tab-example" onSelect={k=> this.setState({key:k})}>
                                <Tab eventKey="ETH" title="ETH" >
                                    <Coin coin={this.state.key}/>
                                </Tab>
                                <Tab eventKey="BTC" title="BTC" >
                                    <Coin coin={this.state.key} />
                                </Tab>
                                <Tab eventKey="LTC" title="LTC" >
                                    <Coin coin={this.state.key} />
                                </Tab>
                                <Tab eventKey="ETC" title="ETC" >
                                    <Coin coin={this.state.key} />
                                </Tab>
                                <Tab eventKey="HPB" title="HPB" >
                                    <Coin coin={this.state.key} />
                                </Tab>
                            </Tabs>
                  
                        </Col>
                        <div className="chart">
                          <Grid >
                            <Grid item xs={12} justify="right" alignItems="right">
                            <TradingViewWidget symbol="NASDAQ:AAPL" />
                            </Grid>
                          </Grid>
                        </div>
                    </Row>
                
            </div>
        )
    }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
