import styled from 'styled-components';

export const OlList = styled.ol`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 2em;

  li {
    align-self: flex-start;
    padding: 0.25em 0;
    list-style-position: inside;
    color: ${({ theme }) => theme.colors.light};
  }

  span {
    color: ${({ theme }) => theme.colors.mainFontColor};
    font-weight: 600;
    margin: 0 0.5em 0 0.25em;
  }
`;
