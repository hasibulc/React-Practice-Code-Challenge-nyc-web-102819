import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiArray: [],
    eaten: {},
    custMoney: 100
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushiArray => this.setState({sushiArray}))
  }

  handleEaten = (id, price) => {
    if ( !this.state.eaten[id] && price <= this.state.custMoney ){
      this.setState({ eaten: { ...this.state.eaten, [id]: true }, custMoney: this.state.custMoney - price })
    }
  }

  render() {

    return (
      <div className="app">
        <SushiContainer 
          sushiArray={this.state.sushiArray} 
          handleEaten={this.handleEaten} 
          eaten={this.state.eaten}/>
        <Table 
          emptyPlates={Object.keys(this.state.eaten)}
          custMoney={this.state.custMoney}/>
      </div>
    );
  }
}

export default App;