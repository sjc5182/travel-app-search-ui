import React from 'react';
import axios from 'axios';
import Quotes from '../constructor/Quotes';
import LogoBar from './side-bars/logo-bar';
import TopBar from './side-bars/top-bar';
import Delta from './airlines/delta';
import LeftBar from './side-bars/left-bar';
import ZIndexTest from './side-bars/z-index-test';

class Main extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      quotes: []
    }
  }

  segmentTest(legs, segments) {
    let count = [];
    let arraySegment = [];
    for(let i = 0; i < legs.length; i++){
      count.push(legs[i].SegmentIds.length);
      for(let j = 0; j < legs[i].SegmentIds.length; j++){
        segments.forEach(id => {
          if(id.Id === legs[i].SegmentIds[j]){
            arraySegment.push(id)
          }
        })
      }
    }
    return [arraySegment, count];
  };

  componentDidMount(){
    const config = {
      headers: {'X-RapidAPI-Key': '9582c9a04bmsh38417e4edecff7dp13f60djsn521655bbeed3'}
    };
    axios.get("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/pricing/uk2/v1.0/5cc0b217-fa4f-4892-946b-5ba45ea17a0a", config)
    .then((result) => {
      let legs = result.data.Legs;
      let segments = result.data.Segments;
      let countSegments = this.segmentTest(legs, segments)
      let arraySegment = countSegments[0]
      let count = countSegments[1]
      let arrayData = []
      let startIndex = 0
      let endIndex = 0
      count.forEach(value =>{
        if(startIndex === 0){
          arrayData.push(arraySegment.slice(startIndex, value))
          startIndex =+value
          endIndex =+value
        }else {
          arrayData.push(arraySegment.slice(startIndex, endIndex+value))
          startIndex = endIndex + value
          endIndex = startIndex
        }
      })
      this.setState({
        //quotes: Quotes.legs(itineraries, legs)
        quotes: arrayData
      })
    });
  }

  render() {
    return (
      <div className = "main-page-column-setting">
        <LogoBar />
        <div className = "main-rows-setting">
          <LeftBar />
          <div className = "main-contents-column-setting">
            <TopBar />
            {/* <Delta /> */}
            <ZIndexTest />
          </div>
        </div>
      </div>
    )
  }
}

export default Main;