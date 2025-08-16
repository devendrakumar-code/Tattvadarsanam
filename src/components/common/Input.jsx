```javascript
import React from 'react';
import './Input.css';

const Input = ({ type = 'text', placeholder, value, onChange, name }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="custom-input"
    />
  );
};

export default Input;
```
