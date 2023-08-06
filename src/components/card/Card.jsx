import React from 'react';
import style from './Card.module.css';

import arrowImg from '../../img/icons/arrow.svg';

const Card = ({title, img}) => {

  return (
    <div className={style.card}>
      <img className={style.card__img} src={img} alt="" />

      <div className={style.card__body}>
        <div className={style.card__text}>
          <div className={style.card__title}>{title}</div>
          <div className={style.card__mited}>Explore Now!</div>
        </div>

        <div className={style.card__icon}>
          <img src={arrowImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;