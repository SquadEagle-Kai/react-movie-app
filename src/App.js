import 'swiper/css'

import { BrowserRouter } from 'react-router-dom'
import RouteDom from './config/RouteDom'

import Footer from './components/footer/Footer'
import Header from './components/header/Header'


function App() {
  return (
    <BrowserRouter>
      <Header />
        <RouteDom />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
