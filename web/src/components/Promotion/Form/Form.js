  
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Form.css';

const initialValue = {
      nome: '',
      km_por_galao: '',
      cilindros: '',
      cavalor_de_forca: '',
      peso: '',
      aceleracao: '',
      ano: '',
      origem: '',
      img: '',
}

const PromotionForm = () => {
  const [values, setValues] = useState(initialValue);
  const history = useHistory();

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();

    axios.post('http://localhost:3000/carros', values)
      .then((response) => {
        history.push('/');
      });
  }

  return (
    <div>
      <h1>Gerenciamento de carros</h1>
      <h2>Novo Carro</h2>

      <form onSubmit={onSubmit}>
        <div className="promotion-form__group">
          <label htmlFor="nome">Nome</label>
          <input id="nome" name="nome" type="text" onChange={onChange} />
        </div>

        <div className="promotion-form__group">
          <label htmlFor="km_por_galao">km por galao</label>
          <input id="km_por_galao" name="km_por_galao" type="number" onChange={onChange} />
        </div>

        <div className="promotion-form__group">
          <label htmlFor="cilindros">cilindros</label>
          <input id="cilindros" name="cilindros" type="number" onChange={onChange} />
        </div>

        <div className="promotion-form__group">
          <label htmlFor="cavalor_de_forca">cavalor de forca</label>
          <input id="cavalor_de_forca" name="cavalor_de_forca" type="number" onChange={onChange} />
        </div>

        <div className="promotion-form__group">
          <label htmlFor="peso">peso</label>
          <input id="peso" name="peso" type="number" onChange={onChange} />
        </div>
        
        <div className="promotion-form__group">
          <label htmlFor="aceleracao">aceleração</label>
          <input id="aceleracao" name="aceleracao" type="number" onChange={onChange} />
        </div>

        <div className="promotion-form__group">
          <label htmlFor="ano">ano</label>
          <input id="ano" name="ano" type="date" onChange={onChange} />
        </div>

        <div className="promotion-form__group">
          <label htmlFor="origem">origem</label>
          <input id="origem" name="origem" type="text" onChange={onChange} />
        </div>

        <div className="promotion-form__group">
          <label htmlFor="img">Imagem (URL)</label>
          <input id="img" name="img" type="text" onChange={onChange} />
        </div>

        <div>
          <button type="submit">Salvar</button>
        </div>
      </form>
    </div>
  )
};

export default PromotionForm;