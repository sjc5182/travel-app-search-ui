import React from 'react';
import { Checkbox } from 'semantic-ui-react';

export const FlightStops = ({ArrowToggle}) => 
  <div id = 'dropdown-options' className = {ArrowToggle ? 'drop-transform-out' : 'drop-transform-in'}>
    <Checkbox label={<label>Non-Stop</label>} />
    <Checkbox label={<label>1 stop</label>} />
    <Checkbox label={<label>2+ stops</label>} />
  </div>

export const DepartureTimes = (props) => 
<div className = 'range-wrapper' >
  <input 
    type = 'range'
    min = '0' max = '100'
    value = {props.RangeSliderValue}
    onChange = {obj => props.RangeSliderChange(obj)}
    step="1"
  />
</div>
 

