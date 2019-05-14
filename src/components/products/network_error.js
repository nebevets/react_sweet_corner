import './network_error.scss';
import React from 'react';

export default ({stack, networkError, url}) => {
  return(
    <div className="networkError">
      <div className="stack">{stack}</div>
      <div className="errorMessage">{networkError}</div>
      <div className="url">{url}</div>
    </div>
  );
};
