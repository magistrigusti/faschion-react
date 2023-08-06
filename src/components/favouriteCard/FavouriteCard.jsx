import React from 'react';
import style from './FavouriteCard.module.css';
import arrowImgCard from '../../img/icons/arrow.svg';



const FavouriteCard = ({img, title}) => {
  return (
    <div className={style.favoriteCard}>
      <img className={style.favouriteCard__img} src={img} alt="" />

      <div className={style.favouriteCard__body}>
        <div className={style.favouriteCard__text}>
          <div className={style.favouriteCard__title}>{title}</div>
          <div className={style.favouriteCard__mited}>Explore Now!</div>
        </div>

        <div className={style.favouriteCard__icon}>
          <img src={arrowImgCard} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FavouriteCard;