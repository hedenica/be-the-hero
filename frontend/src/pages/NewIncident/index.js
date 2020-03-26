import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function NewIncident(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();
  
  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(event){
    event.preventDefault();

    const data = {
      title,
      description,
      value
    };
    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId,
        }
      })

      history.push('/profile');

    } catch (error) {
      alert('❌ Erro ao cadastrar caso, tente novamente')
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um héroi para te ajudar.</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041"/>
            Voltar para home
          </Link>

        </section>
        <form onSubmit={handleNewIncident}>
          <input 
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

        <div className="buttons">

        <button className="button-cancel" type="submit">Cancelar</button>
        <button className="button-submit" type="submit" >Cadastrar</button>

        </div>
        </form>
      </div>
    </div>
  )
}