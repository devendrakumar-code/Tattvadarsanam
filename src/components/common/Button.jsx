```javascript
import React from 'react';
import './Button.css';

const Button = ({ children, onClick, disabled = false, type = 'button', variant = 'primary' }) => {
  const className = `btn ${variant}`;
  return (
    <button className={className} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  );
};

export default Button;
```
