import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Cadastro.css';
import Header from '../../pages/Header/index'

const initialValue = {
  name: '',
  imageUrl: '',
 
}

const ShoesForm = ({ id }) => {
  const [values, setValues] = useState(id ? null : initialValue);
  const history = useHistory();
  
  useEffect( () => {
    if (id) {
      
      axios.get(`http://localhost:3001/shoes/${id}`)
        .then((response) => {
          
          setValues(response.data);
        })
    }
  }, []);

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();

    const method = id ? 'put' : 'post';
    const url = id
      ? `http://localhost:3001/shoes/${id}`
      : 'http://localhost:3001/shoes'

    axios[method](url, values)
      .then((response) => {
        history.push('/');
      });
  }
  return (
    <div>
      <Header />
      {values && (

        <div className="bloco-form">
            <h2>
            {id
                ? `Editando: ${values.name}`
                : "Cadastre um novo Calçado"}
            </h2>

            <form onSubmit={onSubmit}>
            <input
                placeholder="Nome"
                name="name"
                type="text"
                value={values.name}
                onChange={onChange}
            />
            <br />
            <input
                placeholder="Url da Imagem"
                name="imageUrl"
                type="text"
                value={values.imageUrl}
                onChange={onChange}
            />
            <br />
            <button type="submit">Salvar</button>
            </form>
            </div>
      )}
      </div>
  );
}

export default ShoesForm;