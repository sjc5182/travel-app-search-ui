import React from 'react';

const LogoBar = () => (
  <div className = "logo-bar-container">
    <div className = "logo-bar-border">
      <div className = "logo-plane" />
      <div className = "logo-lookup" />
    </div>
    <div className = "logo-button">
      <button className = "button-currency">USD</button>
      <button className = "button-log-in">Log in</button>
    </div>
  </div>
)

export default LogoBar;