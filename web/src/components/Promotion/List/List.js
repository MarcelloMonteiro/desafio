import React from 'react';
import PromotionCarros from '../Carros/carros';
import './List.css';

const PromotionList = ({ loading, promotions }) => {
  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="promotion-list">
      {promotions.map((promotion) => (
        <PromotionCarros promotion={promotion} />
      ))}
    </div>
  );
}

export default PromotionList;