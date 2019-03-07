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

componentDidMount(){
  const config = {
     headers: {'X-RapidAPI-Key': '9582c9a04bmsh38417e4edecff7dp13f60djsn521655bbeed3'}
    };
     axios.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/85bf3935-f434-4547-b2e8-3479361d038d", config)
    .then((result) => {
      let arrayLegs = [];
      let arraySegment = [];
      let itineraries = result.data.Itineraries;
      let legs = result.data.Legs;
      let segments = result.data.Segments;
      for(let i = 0; i < legs.length; i++){
        for(let j = 0; j < legs[i].SegmentIds.length; j++){
          segments.forEach(id => {
            if(id.Id === legs[i].SegmentIds[j]){
              console.log("hello");
            }
          })
        }
      }
      //   // legs[i].SegmentIds.forEach(idValue => {
      //   //   arrayLegs.push(idValue);
      //   // })
      // }

      

      // for(let i = 0; i<legs.length; i++){
      //   legs[i].SegmentIds.filter(id => {
      //     segments.indexof()
      //   })
      //   console.log(legs[i].Duration);
      // }

    
      

  
      // legs.filter(time => {
      //   console.log(time.Duration)
      // })
      // this.setState({
      //   quotes: Quotes.legs(itineraries, legs)
      // })
    });
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