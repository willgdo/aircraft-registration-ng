import React, { Fragment, useState } from 'react';
import axios from 'axios';
import '../styles/Search.css';

const Search = () => {
  const [value, setvalue] = useState("");
  const [message, setMessage] = useState("Digite o registro da aeronave");

  const searchRegistration = () => {
    axios('https://altinodantas.github.io/checkmark/data/dados.json')
    .then(response => {
        checkRegistration(response.data)
    })
    .catch((err) => {
      console.error(err);
    });

    setvalue("");
  }

  const checkRegistration = (data) => {

    if (value.length === 5) {
      const result = data.filter(registro => registro.MARCA === value.toUpperCase());

      if (result.length === 1) {
        setMessage("Digite o registro da aeronave");
        console.log(result);
      } else {
        setMessage("Registro não encontrado")
      }
    } else {
      setMessage("Digite as 5 letras do registro (PR-ABC)")
    }
  }
  
  return (
    <Fragment>
      <header>
        <h1>Registro de aeronaves</h1>
      </header>
      <main>
        <p className="Message">{message}</p>
        <input onChange={e => setvalue(e.target.value)} type="text" id="registration" name="registration" className="Registration" maxLength='5' value={value} autoFocus={true}></input>
        <button className="Btn-search" onClick={searchRegistration}>Buscar</button>
      </main>
    </Fragment>
  );
}

export default Search;