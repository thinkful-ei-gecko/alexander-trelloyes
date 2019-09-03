import React from 'react';
import './Card.css';

//does props.key go somewhere in here?

function Card(props){
  return (
    <div className='Card'>
      <button type='button'> delete </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
  </div>
  );
};

export default Card;