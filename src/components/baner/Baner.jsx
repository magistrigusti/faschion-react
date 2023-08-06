import React from 'react';
import './Baner.css';
import banerImg from '../../img/images/promo-img.jpg';

const Baner = () => {
  return (
    <section className="baner">
      <div className="container">
        <div className="baner__content">
          <div className="baner__img">
            <img src={banerImg} alt="" />
          </div>

          <div className="baner__list">
            <h2 className="baner__title">
              <span className="highlight">
                <span>PAYDAY</span>
              </span>
              SALE NOW</h2>

            <p className="baner__text">Spend minimal $100 get 30% off voucher code for your next purchase</p>

            <div className="baner__desc">
              <span>1 June - 10 June 2021</span>
              <p>*Terms & Conditions apply</p>
            </div>

            <div className="baner__btn-wrapper">
              <a className="baner__btn" href="#!">SHOP NOW</a>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default Baner;