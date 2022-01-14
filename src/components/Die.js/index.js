import React from 'react';
import { DieFace } from './Die.styles';

const Die = ({ number }) => {
  return (
    <DieFace>
      <h2>{number}</h2>
    </DieFace>
  );
};

export default Die;
