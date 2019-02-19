import React from 'react';
import axios from 'axios';
import Quotes from '../constructor/Quotes';
import Delta from './airlines/delta';

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      quotes: []
    }
  }

  componentDidMount(){
  const config = {
    headers: {'X-RapidAPI-Key': '9582c9a04bmsh38417e4edecff7dp13f60djsn521655bbeed3'}
  };
  axios.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/069a5957-0617-43fd-a7bc-3ab6f3ddcd07", config)
    .then((result) => {
      let itineraries = result.data.Itineraries;
      let legs = result.data.Legs;
      this.setState({
        quotes: Quotes.legs(itineraries, legs)
      })
    });
  }

  render() {
    return (
      <div>
        <p>Hello this is my Main Page</p>
        <Delta test = {this.state.quotes}/>
      </div>
    );
  }
}


export default Main;