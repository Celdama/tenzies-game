import styled from 'styled-components';

export const DieFace = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isHeld }) => (isHeld ? '#59E391' : 'white')};
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  border-radius: 10px;

  h2 {
    font-size: 2rem;
  }
`;
