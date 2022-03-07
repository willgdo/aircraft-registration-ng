import React, { Fragment, useState } from 'react';
import axios from 'axios';
import '../styles/Search.css';

const Search = ({ setProps }) => {

  const defaultMessage = "Digite o registro da aeronave";
  const notFoundMessage = "Registro não encontrado";
  const setLettersMessage = "Digite as 5 letras do registro (PR-ABC)";

  const [value, setValue] = useState("");
  const [message, setMessage] = useState(defaultMessage);
  const [loading, setLoading] = useState(false);

  const initSearch = () => {
    setLoading(true);
    searchRegistration();
  }

  const searchRegistration = () => {
    axios('https://altinodantas.github.io/checkmark/data/dados.json')
    // axios('https://sistemas.anac.gov.br/dadosabertos/Aeronaves/RAB/dados_aeronaves.json', {
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //     'Content-Type': 'application/json',
    //   },
    // })
    .then(response => {
        setLoading(false);
        checkRegistration(response.data)
    })
    .catch((err) => {
      console.error(err);
    });
  }

  const checkRegistration = (data) => {

    if (value.length === 5) {
      const result = data.filter(reg => reg.MARCA === value.toUpperCase());

      if (result.length === 1) {
        setMessage(defaultMessage);
        setValue("");
        setProps(result)
      } else {
        setMessage(notFoundMessage);
      }
    } else {
      setMessage(setLettersMessage);
    }
  }
  
  return (
    <Fragment>
      <header>
        <h1>Registro de aeronaves <span className="Icon-Plane">✈️</span></h1>
      </header>
      <main>
      <p className={`Message ${message !== defaultMessage ? 'Error' : '' }`}>{message}</p>
      <input onChange={e => setValue(e.target.value)} type="text" id="registration" name="registration" className="Registration" maxLength='5' value={value} autoFocus={true}></input>
      {loading ? (
        <span className="Loader"></span> 
      ) : (
        <button className="Btn-Search" onClick={initSearch}>
        <img className="Loader-Radar" src="https://c.tenor.com/8Juj0k-1L4AAAAAd/radar-love-search.gif" alt="loading" width="35px" height="35px"/>
          Buscar
        </button>
      )}
      </main>
    </Fragment>
  );
}

export default Search;