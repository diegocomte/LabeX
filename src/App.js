import Router from './Route/Router';
import {theme} from './Constants/Theme';
import { ThemeProvider } from '@mui/material/styles';
import { MainContainer, GlobalStyle } from './Components/GeneralStyle';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainContainer>
        <GlobalStyle />
        <Router />
      </MainContainer>
    </ThemeProvider>
  );
}

export default App;
