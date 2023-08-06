import React from 'react';

import Header from './components/header/Header';
import Promo from './components/promo/Promo';
import Brands from './components/brands/Brands';
import Arrivals from './components/arrivals/Arrivals';
import Baner from './components/baner/Baner';
import Favourite from './components/favourite/Favourite';

function App() {
  const project = 'Fachion';

  return (
    <div className="App">
      <Header />
      {/* <Promo />
      <Brands />
      <Arrivals />
      <Baner />
      <Favourite /> */}
    </div>
  );
}

export default App;
