import React from 'react';

const Input = (props) => {
  const {input, type="text", placeholder, autoComplete=input.name} = props;
  return(
    <input {...input} type={type} placeholder={placeholder} autoComplete={autoComplete}/>
  );
}

export default Input;