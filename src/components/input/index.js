import React from 'react';

export default props => {
  const {input, label, meta: {error, touched}, type="text", className} = props;
  return(
    <div className={`input-field ${className}`}>
      <input {...input} type={type} id={input.name}/>
      <label htmlFor={input.name}>{label}</label>
      <p className="">{touched && error}</p>
    </div>
  );
}