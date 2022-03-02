import React, { Fragment } from 'react';
import '../styles/Search.css';

const Search = () => {
  return (
    <Fragment>
      <header>
          <h1>Registro de aeronaves</h1>
      </header>
      <main>
        <p class="Message">Digite o registro da aeronave</p>
        <input type="text" id="registration" name="registration" class="Registration" maxLength='5'></input>
        <button class="Btn-search">Buscar</button>
      </main>
    </Fragment>
  );
}

export default Search;


