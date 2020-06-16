import * as React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
  display: block;
  position: relative;
  width: 40px;
  height: 40px;
  margin: 0 auto;

  div {
    box-sizing: border-box;
    position: absolute;
    width: 40px;
    height: 40px;
    border: 4px solid #333;
    border-radius: 50%;
    animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #333 transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingCircle: React.FC = () => {
  return (
    <Spinner>
      <div />
      <div />
      <div />
      <div />
    </Spinner>
  );
};

export default LoadingCircle;
