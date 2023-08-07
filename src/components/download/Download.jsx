import React from 'react';
import './Download.css';
import appImg from '../../img/images/vouchers-img.png';
import storeImg from '../../img/icons/app-store.png';
import playImg from '../../img/icons/google-play.png';

const Download = () => {
  return (
    <div className="download">
      <div className="container">
        <div className="download__content">
          <div className="download__text">
            <div className="download__title">DOWNLOAD APP &
              
              GET THE VOUCHER!</div>

            <div className="download__desc">Get 30% off for first transaction using Rondovision mobile app for now.</div>

            <div className="download__btn-wrapper">
              <a href="#!"><img src={storeImg} alt="" /></a>

              <a href="#!"><img src={playImg} alt="" /></a>
            </div>
          </div>

          <div className="download__img">
            <img src={appImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;