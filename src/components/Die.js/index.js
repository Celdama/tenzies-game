import React from 'react';
import { DieFace } from './Die.styles';

const Die = ({ number, isHeld }) => {
  return (
    <DieFace isHeld={isHeld}>
      <h2>{number}</h2>
    </DieFace>
  );
};

export default Die;
