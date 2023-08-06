import React from 'react';
import './Favourite.css';
import FavouriteCard from '../favouriteCard/FavouriteCard';
import favouriteImg02 from '../../img/images/promo-02.jpg';
import favouriteImg01 from '../../img/images/promo-01.jpg';

const Favourite = () => {
  return (
    <section className="favourite">
      <div className="container">
        <div className="favourite__header">
          <h2 className="title-2">Young’s Favourite</h2>
        </div>

        <div className="favourite__card">
          <FavouriteCard img={favouriteImg01} title="Trending on instagram" />
          <FavouriteCard img={favouriteImg02} title="All Under $40" />
        </div>
      </div>
    </section>
  );
};

export default Favourite;