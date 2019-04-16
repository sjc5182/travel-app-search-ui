import React from 'react';
import { Input } from 'semantic-ui-react';

const TopBar = () => (
  <div className = "top-bar-container">
    <div className = "top-bar-content-info">
      <div className = 'search-label'>
        <span>Your Info</span>
        <span>From</span>
        <span>To</span>
        <span>Depart</span>
        <span> Cabin Class & Travlers</span>
      </div>
      <div className = 'search-input'>
        <Input size = 'large' icon = 'user' placeholder='Name' />
        <Input size = 'large' icon = 'exchange' placeholder = 'SFO'/>
        <Input size = 'large' placeholder = 'JFK'/>
        <Input size = 'large' icon = 'calendar' placeholder = 'Travel Date'/>
        <Input size = 'large' icon = 'dropdown' placeholder = '1 Adult, Economy'/>
      </div>
    </div>
  </div>
)

export default TopBar;