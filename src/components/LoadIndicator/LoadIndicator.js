import React from 'react';
import './LoadIndicator.css';

//
// Taken from https://loading.io/css/
//
const LoadIndicator = () => (
  <div className="lds-wrapper">
    <div className="lds-dual-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export { LoadIndicator };
