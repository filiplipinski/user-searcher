import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  svg {
    display: block;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);

    color: #333;
    opacity: 0.4;
    height: 20px;
    width: 20px;
  }
`;

export const Input = styled.input`
  width: 25em;
  padding: 10px 35px 10px 10px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.light};
  outline: none;
  font-size: 1em;

  &:focus {
    box-shadow: 0px 0px 3px 1px ${({ theme }) => theme.colors.color1};
  }
`;
