import React from 'react';
import PromotionCarros from './components/Promotion/Carros/carros';

const App = () => {
  const promotion = {
    "id": 1,
      "nome": "Honda Civc",
      "km_por_galao": 18,
      "cilindros": 8,
      "cavalor_de_forca": 500,
      "peso": 3504,
      "aceleracao": 12,
      "ano": "2009-01-01",
      "origem": "USA",
      "marcas": [
        {
          "id": 1,
          "Marca": "Honda",
        }
      ],
  };


  return (
    <div
      className="App"
      style={{
        maxWidth: 800,
        margin: '30px auto',
      }}
    >
      <PromotionCarros promotion={promotion} />
    </div>
  );
}

export default App;