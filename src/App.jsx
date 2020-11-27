import GlobalStyles from './GlobalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import Feature from './components/Feature';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyles />
        <Hero />
        <Products />
        <Feature />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
