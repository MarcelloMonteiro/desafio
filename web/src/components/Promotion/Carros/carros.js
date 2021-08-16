import React from 'react';
import './carros.css';

const PromotionCarros = ({ promotion }) => (
  <div className="promotion-carros">
    <img
      src={promotion.img}
      alt={promotion.nome}
      className="promotion-carros__image"
    />
    <div className="promotion-carros__info">
      <h1 className="promotion-carros__title">{promotion.nome}</h1>
      <span className="promotion-carros__price">CV {promotion.cavalor_de_forca}</span>
      <footer className="promotion-carros__footer">
        <a
          href={promotion.url}
          target="_blank"
          rel="noopener noreferrer"
          className="promotion-carros__link"
        >
          Detalhamento
        </a>
      </footer>
    </div>
  </div>
);

export default PromotionCarros;
