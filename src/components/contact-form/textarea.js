import React from 'react';

const TextArea = (props) => {
  const {input, placeholder} = props;
  return(
    <textarea {...input} placeholder={placeholder}></textarea>
  );
}

export default TextArea;