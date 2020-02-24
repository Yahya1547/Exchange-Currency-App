import React from 'react';
import './App.css';
import CurrencyList from './CurrencyList';
import Background from './image/background.jpg';
import ChangeAmount from './ChangeAmount'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      changeTo : "IDR",
      amountChange : 1,
      amount : '',
      list : []
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(event){
    const {name , value} = event.target
    name === "changeTo" ? this.setState({ // this section to change the currency if the button is clicked
      [name] : value,
      amountChange : this.state.list[this.state.changeTo]
    }):
    this.setState({ // this section to change the amount
      [name] : value
    })
  }

  componentDidMount(){
    fetch('https://api.exchangeratesapi.io/latest?base=IDR')
        .then(response => response.json())
        .then(response => {
            this.setState({
                list : response.rates
            })
        })
  }

  render(){
    const styles = {
      backgroundImage : `url(${Background})`
    }

    // this is to format the amount we input
    let yourAmount = new Intl.NumberFormat('de-DE',{ style : 'currency', currency : 'IDR'}).format(this.state.amount);

    // this is to format the changed amount to the selected currency
    let currentAmount = new Intl.NumberFormat('de-DE',{ style : 'currency', currency : this.state.changeTo}).format(this.state.amount*this.state.amountChange);
    return (
      <div className="App" style={styles}> 
        <h2 id="infoChange">
          {yourAmount + " = " + currentAmount}
        </h2>
        <ChangeAmount handleChange = {this.handleChange} data = {this.state}/>
        <CurrencyList handleChange = {this.handleChange} data = {this.state}/>
      </div>
    );
  }
  
}

export default App;
