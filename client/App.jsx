import React from 'react'
import Header from './Components/Header';
import Table from './Components/Table';
import Guide from './Components/Guide';
import Marketinfo from './Components/Marketinfo';
import Market from './Components/Market'
import Nav from './Components/Nav'
import MarketRent from './Components/MarketRent'
import SpinnersComponent from './Components/Spinners'

import { getMarketRent } from './api'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMarket: false,
      rentPrice: "___",
      loading: false,
      color: '#000000',
      className: ''
    }

    this.handleClick = this.handleClick.bind(this)
    this.updateMarketRent = this.updateMarketRent.bind(this)
  }

  updateMarketRent(suburbName) {
    //set the state to loading true
    this.setState({
      loading: true,
      errorMessage: null
    })
    getMarketRent(suburbName)
      .then(marketRent => {
        //set the state back to loading false 
        this.setState({
          loading: false
        })
          
        //console.log(marketRent.items.length);
        if(marketRent.errorMessage) {
          console.log("error message: ", marketRent.errorMessage)
          this.setState({ errorMessage: marketRent.errorMessage, 
            rentPrice: "___"

          })
        } else {

          if (marketRent.items.length > 0) {
            //array
            this.setState({
              rentPrice: marketRent.items[0].med
            })
          } else {
            //object
            this.setState({
              rentPrice: marketRent.items.med
            })

          }
          // console.log(marketRent.items)

          // this.setState({
          //   rentPrice: marketRent.items.med
          // })
        }
      })
      .catch(err => {
         //set the state back to loading false 
         this.setState({
          loading: false
        })

        this.setState({ errorMessage: err.message })

        //show error
        console.log('error is', err.message)
      })
      

  }

  componentDidMount() {
    
  }

  handleClick() {
    this.setState({
      showMarket: !this.state.showMarket
    })
  }

  render() {
    return (
      <div className="container">
        <Nav />
        <Header />
        <Table />
        <h2>The Market Rent Is {this.state.rentPrice}</h2>
        {!this.state.loading && <MarketRent MarketRent={this.updateMarketRent} />}
        {this.state.loading && <SpinnersComponent />}
        {this.state.errorMessage && this.state.errorMessage}
        <Guide />
        <Marketinfo click={this.handleClick} />
        {this.state.showMarket &&
          <Market />
        }
      </div>

    )
  }
}

export default App