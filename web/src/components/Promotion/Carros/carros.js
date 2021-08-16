import React from 'react';
import './carros.css';

const PromotionCarros = ({ promotion }) => (
  <div className="promotion-carros">
    <img src={promotion.imageUrl} className="promotion-carros__image" />
    <div className="promotion-carros__info">
      <h1 className="promotion-carros__title">{promotion.nome}</h1>
      <span className="promotion-carros__price">CV{promotion.cavalor_de_forca}</span>
    </div>
  </div>
);

export default PromotionCarros;