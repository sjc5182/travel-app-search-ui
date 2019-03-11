import React from 'react';

const zIndexTest = () => (
  <div className = "wrapper">
    <div className = "zcontainer">
      <a href="#slider-1">1</a>
      <a href="#slider-2">2</a>
      <a href="#slider-3">3</a>
      <a href="#slider-4">4</a>
      <a href="#slider-5">5</a>
      <div className = "slides">
        <div className = "ztest1" id="slider-1">1</div>
        <div className = "ztest2" id="slider-2">2</div>
        <div className = "ztest3" id="slider-3">3</div>
        <div className = "ztest4" id="slider-4">4</div>
        <div className = "ztest5" id="slider-5">5</div>
      </div>
    </div>
  </div>
)
export default zIndexTest;