import React from 'react';

const Button = ({ type = 'button', text, onClick, className = 'btn btn-primary' }) => (
  <button type={type} className={className} onClick={onClick}>
    {text}
  </button>
);

export default Button;
