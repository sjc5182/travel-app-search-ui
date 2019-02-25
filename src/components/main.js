import React from 'react';
import axios from 'axios';
import Quotes from '../constructor/Quotes';
import LogoBar from './side-bars/logo-bar';
import TopBar from './side-bars/top-bar';
import Delta from './airlines/delta';
import LeftBar from './side-bars/left-bar';

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      quotes: []
    }
  }

  // componentDidMount(){
  // const config = {
  //   headers: {'X-RapidAPI-Key': '9582c9a04bmsh38417e4edecff7dp13f60djsn521655bbeed3'}
  // };
  // axios.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/069a5957-0617-43fd-a7bc-3ab6f3ddcd07", config)
  //   .then((result) => {
  //     let itineraries = result.data.Itineraries;
  //     let legs = result.data.Legs;
  //     this.setState({
  //       quotes: Quotes.legs(itineraries, legs)
  //     })
  //   });
  // }

  render() {
    return (
      <div className = "main-page-column-setting">
        <LogoBar />
        <div className = "main-rows-setting">
          <LeftBar />
          <div className = "main-contents-column-setting">
            <TopBar />
            <Delta test = {this.state.quotes}/>
          </div>
        </div>
      </div>
    );
  }
}


export default Main;