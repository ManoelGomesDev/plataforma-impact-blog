import Header from '../../src/app/components/Header';
import { ThemeProvider } from '../app/theme/themeContext';

const Home = () => {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  )
}

export default Home;