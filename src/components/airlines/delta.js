import React from 'react';
import Barcode from '../../images/barcode.png';
const arrayTest = [{id: 0}, {id: 1}]
const DeltaTicket = (props) => (
  arrayTest.map(test => 
    
  <div>
  <div className="outer-border">
  <div className = "inner-border-top-left">
    <div className = "inner-left-content-box">
      <div className = "inner-left-content">{test.id}</div>
      <div className = "inner-left-content">DESTINATION</div>
      <div className = "inner-left-content">PASSENGER</div>
    </div>
  </div>
  <div className = "inner-border-top-right">
    <div className = "inner-right-content-box">
      <div className = "inner-right-content">FLIGHT</div>
    </div>
  </div>
  <div className = "inner-border-middle-left">
    <div className = "inner-middle-left-content-box">
      <div className = "inner-middle-left-content">PASSENGER</div>
      <div className = "inner-middle-left-content">
        <div className = "flight-info-layout">
          <div>GATE</div>
          <div>DEPARTURE</div>
          <div>BOARDING ZONE</div>
        </div>
      </div>
      <div className = "inner-middle-left-content">
        <div className = "tracking-border-top">
          <div className = "tracking-layout-outer-layer">
            <div className = "tracking-lable">TRACKING</div>
            <div className = "data-lable">DATA</div>
            <div className = "options-lable">OPTIONS</div>
            <img src = {Barcode} style = {{height: 70 + 'px', width: 200 + 'px' }} />
          </div>
        </div>
      </div>
    </div>  
  </div>
  <div className = "inner-border-middle-right"></div>
  <div className = "inner-border-bottom-left">
    <img className = "airline-logo-box" src = "http://www.logospng.com/images/131/delta-air-lines-logo-png-transparent-pngpix-131573.png" />
  </div>
  <img className = "inner-border-bottom-right" src = "http://www.logospng.com/images/131/delta-air-lines-logo-png-transparent-pngpix-131573.png" />
</div>
</div>
  )
);
// {props.test.map(quote => 
//   <div className="outer-border">
//   <div className = "inner-border-top-left">
//     <div>Hello</div>
//     {quote.OriginStation}
//   </div>
//   <div className = "inner-border-top-right"></div>
//   <div className = "inner-border-middle-left"></div>
//   <div className = "inner-border-middle-right"></div>
//   <img className = "inner-border-bottom-left" src = "https://s1.apideeplink.com/images/airlines/UA.png" />
//   <img className = "inner-border-bottom-right" src = "https://s1.apideeplink.com/images/airlines/UA.png" ></img>
//   </div>
// )}


export default DeltaTicket;