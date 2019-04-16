import React from 'react';

const LeftBar = () => (
  <div className = 'left-bar-container'>
    <div className = 'search-label-wrapper'>
      <div className = 'label-font'>STOPS</div>
      <div className = 'dropdown'>
        <i class="fas fa-angle-up" ></i>
        <i class="fas fa-angle-down" ></i>
      </div>
    </div>
    <div className = 'search-label-wrapper'>
      <div className = 'label-font'>Departure times</div>
      <div className = 'dropdown'>
        <i class="fas fa-angle-down" ></i>
      </div>
    </div>
    <div className = 'search-label-wrapper'>
      <div className = 'label-font'>Trip duration</div>
      <div className = 'dropdown'>
        <i class="fas fa-angle-down" ></i>
      </div>
    </div>
    <div className = 'search-label-wrapper'>
      <div className = 'label-font'>Airlines</div>
      <div className = 'dropdown'>
        <i class="fas fa-angle-down" ></i>
      </div>
    </div>
  </div>
)
export default LeftBar;