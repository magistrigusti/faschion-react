import React from 'react';

import Header from './components/header/Header';
import Promo from './components/promo/Promo';
import Brands from './components/brands/Brands';
import Arrivals from './components/arrivals/Arrivals';
import Baner from './components/baner/Baner';
import Favourite from './components/favourite/Favourite';
import Download from './components/download/Download';
import PromoInput from './components/promoInput/PromoInput';
import Footer from './components/footer/Footer.jsx';

function App() {
  const project = 'Fachion';

  return (
    <div className="App">
      <Header />
      <Promo />
      <Brands />
      <Arrivals />
      <Baner />
      <Favourite />
      <Download /> 
      <PromoInput />
      <Footer />
    </div>
  );
}

export default App;
