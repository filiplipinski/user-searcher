import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as theme from 'theme';
import UserSearcher from 'modules/UserSearcher';
import * as S from './styled';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <S.GlobalStyles />
      <UserSearcher />
    </ThemeProvider>
  );
};

export default App;
