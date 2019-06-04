import React from 'react';

const TextArea = (props) => {
  const {input, placeholder, meta} = props;
  return(
    <div className="sweetInput">
      <p className="error">{meta.touched && meta.error}</p>
      <textarea {...input} placeholder={placeholder}></textarea>
    </div>
  );
}

export default TextArea;