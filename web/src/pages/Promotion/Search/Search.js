import React, { useEffect, useState } from 'react';
import PromotionCarros from 'components/Promotion/Carros/carros';
import axios from 'axios';
const PagesPromotionSearch = () => {
    const [promotions, setPromotions] = useState([]);
  
    useEffect(() => {
      axios.get('http://localhost:3000/carros/')
        .then((response) => {
          setPromotions(response.data);
        });
    }, []);
  
    return (
      <div
        style={{
          maxWidth: 800,
          margin: '30px auto',
        }}
      >
        {promotions.map((promotion) => (
          <PromotionCarros promotion={promotion} />
        ))}
      </div>
    );
  };
  
export default PagesPromotionSearch;
