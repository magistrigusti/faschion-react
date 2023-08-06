import React from 'react';
import './App.css';
import appImg from '../../img/images/vuchers-img.png';

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="app__content">
          <div className="app__text"></div>

          <div className="app__img">
            <img src={appImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;