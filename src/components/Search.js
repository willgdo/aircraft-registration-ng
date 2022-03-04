import React, { Fragment, useState } from 'react';
import axios from 'axios';
import '../styles/Search.css';

const Search = () => {
  const [value, setvalue] = useState("");
  const [message, setMessage] = useState("Digite o registro da aeronave");

  const getValue= () => {
    console.log(value.toUpperCase());

    axios('https://altinodantas.github.io/checkmark/data/dados.json')
    .then(response => {
        const reg = response.data.filter(item => item.MARCA === value.toUpperCase());
        console.log(reg);
    })
    .catch((err) => {
      console.error(err);
    });

    setvalue("");
  }
 
  return (
    <Fragment>
      <header>
          <h1>Registro de aeronaves</h1>
      </header>
      <main>
        <p className="Message">{message}</p>
        <input onChange={e => setvalue(e.target.value)} type="text" id="registration" name="registration" className="Registration" maxLength='5' value={value} autoFocus={true}></input>
        <button className="Btn-search" onClick={getValue}>Buscar</button>
      </main>
    </Fragment>
  );
}

export default Search;


