import React from 'react';

const Input = (props) => {
  const {input, type="text", placeholder, autoComplete=input.name, meta} = props;
  return(
    <div>
      <p className="error">{meta.touched && meta.error}</p>
      <input {...input} type={type} placeholder={placeholder} autoComplete={autoComplete}/>
    </div>
  );
}

export default Input;