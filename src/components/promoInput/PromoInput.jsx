import React from 'react';
import './PromoInput.css';

const PromoInput = () => {
  return (
    <section className="promoInput">
      <div className="container">
        <div className="promoInput__content">
          <div className="promoInput__title">JOIN SHOPPING COMMUNITY TO <br />GET MONTHLY PROMO</div>

          <div className="promoInput__text">Type your email down below and be young wild generation</div>

          <input className="promoInput__input" type="cradio" placeholder="Add your email here" />
            <div className="promoInput__btn-wrapper">
              <a className="promoInput__btn" href="#!">SEND</a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PromoInput;