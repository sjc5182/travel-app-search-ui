import React from 'react';
import { FlightStops, DepartureTimes } from './inner-left-bars/flight-stops';

class LeftBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      arrowToggleOn: true,
      rangeSlider: 50
    }
  }

  handleChange = () => {
    this.setState(state => ({
      arrowToggleOn: !state.arrowToggleOn
    }))
  }

  rangeSliderChange = (e) => {
    this.setState({
      rangeSlider: e.target.value
    })
  }

  render(){
    return (
      <div className = 'left-bar-container'>
        <div className = 'search-label-wrapper'>
          <div className = 'label-font'>STOPS</div>
          <div className = 'dropdownicon' onClick = { this.handleChange }>
            {!this.state.arrowToggleOn && <i class="fas fa-angle-up" ></i>}
            {this.state.arrowToggleOn && <i class="fas fa-angle-down" ></i>}
          </div>
        </div>
        <FlightStops ArrowToggle = {this.state.arrowToggleOn}/>
        <div className = 'search-label-wrapper'>
          <div className = 'label-font'>Departure times</div>
          <div className = 'dropdownicon' onClick = { this.handleChange }>
            {!this.state.arrowToggleOn && <i class="fas fa-angle-up" ></i>}
            {this.state.arrowToggleOn && <i class="fas fa-angle-down" ></i>}
          </div>
        </div>
        <DepartureTimes RangeSliderValue = {this.state.rangeSlider} RangeSliderChange = {this.rangeSliderChange}/>
        <div className = 'search-label-wrapper'>
          <div className = 'label-font'>Trip duration</div>
          <div className = 'dropdownicon'>
            <i class="fas fa-angle-down" ></i>
          </div>
        </div>
        <div className = 'search-label-wrapper'>
          <div className = 'label-font'>Airlines</div>
          <div className = 'dropdownicon'>
            <i class="fas fa-angle-down" ></i>
          </div>
        </div>
      </div>
    )
  } 
}
export default LeftBar;