import React from 'react';

const DeltaTicket = (props) => (
  <div>
  {props.test.map(quote => 
    <div className="outer-border">
    <div className = "inner-border-top-left">
      {quote.OriginStation}
    </div>
    <div className = "inner-border-top-right"></div>
    <div className = "inner-border-middle-left"></div>
    <div className = "inner-border-middle-right"></div>
    <img className = "inner-border-bottom-left" src = "https://s1.apideeplink.com/images/airlines/UA.png" />
    <img className = "inner-border-bottom-right" src = "https://s1.apideeplink.com/images/airlines/UA.png" ></img>
    </div>
  )}
  </div>
);
export default DeltaTicket;