import styled from 'styled-components';

export const Header = styled.h1`
  font-size: 3em;
  font-weight: bold;
  text-align: center;
  padding: 2% 0;
  color: ${({ theme }) => theme.colors.mainFontColor};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
