import React from 'react';

export default ({altText, url}) => {
  //console.log(props);
  return(
    <div className="thumbNail">
      <img src={url} alt={altText}/>
    </div>
  );
};
