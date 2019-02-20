import React from 'react';

const DeltaTicket = (props) => (
  <div>
    <div className="outer-border">
      <div className = "inner-content-box">
        <div className = "inner-border-top-left">
          <div className = "inner-content">FLIGHT</div>
          <div className = "inner-content">DESTINATION</div>
          <div className = "inner-content">PASSENGER</div>
        </div>
      </div>
      <div className = "inner-border-top-right"></div>
      <div className = "inner-border-middle-left"></div>
      <div className = "inner-border-middle-right"></div>
      <div className = "inner-border-bottom-left"></div>
      <div className = "inner-border-bottom-right"></div>
    </div>
  </div>


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

);
export default DeltaTicket;