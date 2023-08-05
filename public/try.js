import React from 'react';
import './Promo.css';
import promoImg from '../../img/images/header-img.jpg';

const Promo = () => {
  return (
		<section className="promo">
			<div className="container">
				<div className="promo__content">
					<div className="promo__text">
						<div className="promo__title">
							<span className="highlight">
								<span>LET’S</span>
							</span>
							EXPLORE
							<span className="highlight highlight--yellow">
								<span>UNIQUE</span>
							</span>
							CLOTHES.
						</div>

						<div className="promo__desc">
							Live for Influential and Innovative fashion!
						</div>

						<div className="promo__btn-wrapper">
							<a href="#!" className="promo__btn">
								Shop Now
							</a>
						</div>
					</div>

					<div className="promo__img">
						<img src={promoImg} alt="Promo" />
					</div>
				</div>
			</div>
		</section>
  )
};

export default Promo;



.promo {
	margin-bottom: 63px;
}

.promo__content {
	display: flex;
	column-gap: 24px;

	padding-top: 68px;
	padding-left: 120px;

	border-radius: 59px;
	background-color: #f4f6f5;
}

.promo__title {
	max-width: 480px;
	margin-bottom: 40px;
	font-weight: 900;
	font-size: 96px;
	line-height: 1.25;
}

.promo__desc {
	margin-bottom: 32px;
	font-weight: 400;
	font-size: 32px;
	line-height: calc(48 / 32);
	letter-spacing: -0.05em;
}

.promo__btn-wrapper {
	display: flex;
	column-gap: 34px;
	align-items: center;
}

.promo__btn-wrapper::before {
	content: '';
	display: inline-block;
	width: 190px;
	height: 32px;
	background-image: url('./../../img/icons/decor-yellow.svg');
}

.promo__btn {
	padding: 18px 40px;

	background: #000000;
	border-radius: 10px;

	font-weight: 500;
	font-size: 30px;
	line-height: 1.5;
	letter-spacing: -0.05em;
	color: #fff;
}

.highlight {
	position: relative;
	display: inline-block;
}

.highlight span {
	position: relative;
	z-index: 1;
}

.highlight::before {
	content: '';
	display: block;
	position: absolute;
	top: -12px;
	bottom: 0;
	left: -40px;
	right: -160px;
	background-color: #fff;
	transform: rotate(-2deg);
}

.highlight--yellow::before {
  right: -110px;
  background-color: var(--yellow);
}
