import React from 'react';
import { DieFace } from './Die.styles';

const Die = ({ number, isHeld, holdDice }) => {
  return (
    <DieFace isHeld={isHeld} onClick={holdDice}>
      <h2>{number}</h2>
    </DieFace>
  );
};

export default Die;
