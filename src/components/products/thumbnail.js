import React from 'react';

export default ({altText, url}) => {
  return(
    <div className="thumbNail">
      <img src={url} alt={altText} title="More details..."/>
    </div>
  );
};
