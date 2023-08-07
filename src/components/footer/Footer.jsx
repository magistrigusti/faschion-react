import React from 'react';
import './Footer.css';
import fb from '../../img/socials/fb.svg';
import lin from '../../img/socials/in.svg';
import inst from '../../img/socials/inst.svg';
import tw from '../../img/socials/tw.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__row">
          <div className="footer__left">
            <div className="footer__title">FASHION</div>

            <div className="footer__text">Complete your style with awesome clothes from us.</div>

            <div className="footer__social">
              <a href="#!"><img src={fb} alt="" /></a>
              <a href="#!"><img src={lin} alt="" /></a>
              <a href="#!"><img src={inst} alt="" /></a>
              <a href="#!"><img src={tw} alt="" /></a>
            </div>
          </div>

          <div className="footer__right">
            <div className="footer__col">
              <div className="footer__col-title">Company</div>

              <ul>
                <li><a className="footer__link" href="#!">About</a></li>
                <li><a className="footer__link" href="#!">Contact us</a></li>
                <li><a className="footer__link" href="#!">Support</a></li>
                <li><a className="footer__link" href="#!">Careers</a></li>
              </ul>
            </div>

            <div className="footer__col">
              <div className="footer__col-title">Quick Link</div>

              <ul>
                <li><a className="footer__link" href="#!">Share Location</a></li>
                <li><a className="footer__link" href="#!">Orders Tracking</a></li>
                <li><a className="footer__link" href="#!">Size Guide</a></li>
                <li><a className="footer__link" href="#!">FAQs</a></li>
              </ul>
            </div>

            <div className="footer__col">
              <div className="footer__col-title">Legal</div>

              <ul>
                <li><a className="footer__link" href="#!">Terms & conditions</a></li>
                <li><a className="footer__link" href="#!">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;