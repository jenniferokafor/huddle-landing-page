import { ThemeProvider } from 'styled-components';
import {CardWrapper} from '../src/components/styles/container.styled.js';
import Header from './components/header.js';
import Card from './components/card.js';
import GlobalStyles from './components/styles/Global.js';
import theme from './components/styles/Theme.js';
import data from './components/data';

function App() {
  const cardDetails = data.map(item => {
    return <Card 
    key={item.id}
    item={item}
  />
  })

  return (
    <ThemeProvider theme = {theme}>
      <>
        <GlobalStyles />
          <Header />
          <CardWrapper>
            {cardDetails}
          </CardWrapper>
      </>
    </ThemeProvider>
  );
}

export default App;
