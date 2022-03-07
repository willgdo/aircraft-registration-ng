import React, { useEffect, useState } from 'react';
import '../styles/Result.css';

const formatPrefix = (reg) => {
  const registration = reg.slice(0, 2) + '-' + reg.slice(2, 5).toString();

  return registration;
}

const Result = (data) => {
  const [prefix, setPrefix] = useState('');
  const [manufacturer, setManufacturer] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [operator, setOperator] = useState('');

  useEffect(() => {
    if (data.data.length > 0) {
      data.data.map(reg => {
        setPrefix(reg.MARCA)
        setManufacturer(reg.NMFABRICANTE)
        setModel(reg.DSMODELO)
        setYear(reg.NRANOFABRICACAO)
        setOperator(reg.NMOPERADOR)
      })
    }
  }, [data.data])


  return (
    <div className="Card">
      <h2 id="prefix"> {formatPrefix(prefix)} </h2>

      <div className="Tags">
        <div>Fabricante:&nbsp;</div>
        <div id="manufacturer">{manufacturer}</div>
      </div>

      <div className="Tags">
        <div>Modelo:&nbsp;</div>
        <div id="model">{model}</div>
      </div>

      <div className="Tags">
        <div>Ano:&nbsp;</div>
        <div id="year">{year}</div>
      </div>

      <div className="Tags">
        <div>Operador:&nbsp;</div>
        <div id="operator">{operator}</div>
      </div>

      <div className={`Links ${data.data.length === 0 ? 'Hide' : '' }`}>
        <a
          href={`https://sistemas.anac.gov.br/aeronaves/cons_rab_resposta.asp?textMarca=${prefix}`}
          id="rab"
          target="_blank"
          rel="noreferrer">
          RAB
        </a>
        <a
          href={`https://www.jetphotos.com/photo/keyword/${formatPrefix(prefix)}`}
          id="jetphotos"
          target="_blank"
          rel="noreferrer">
          Jetphotos
        </a>
        <a
          href={`https://www.flightradar24.com/data/aircraft/${prefix.toLowerCase()}`}
          id="flightradar"
          target="_blank"
          rel="noreferrer">
          Flightradar24
        </a>
      </div>
    </div>
  );
}

export default Result;
