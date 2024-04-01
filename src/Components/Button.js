import React from 'react';

const Button = ({ buttonDisplayName, clickHandler, id }) => (
     <button onClick={clickHandler} id={id}>{buttonDisplayName}</button>
);

export default Button;