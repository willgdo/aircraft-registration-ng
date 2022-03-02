import React from 'react';
import '../styles/Result.css';

const data = [
  {
    "label": "Fabricante",
    "value": "EMBRAER"
  },
  {
    "label": "Modelo",
    "value": "ERJ 190-200 LR"
  },
  {
    "label": "Ano",
    "value": "2011"
  },
  {
    "label": "Operador",
    "value": "AZUL LINHAS AEREAS BRASILEIRAS S.A"
  }
];

const Result = () => {
  return (
    <div class="Card">
      <h2 id="prefix"> PR-AYX </h2>

      {data.map((item, i) => (
        <div key={i} className="Tags">
          <div>{item.label}:&nbsp;</div>
          <div id="manufacturer">{item.value}</div>    
        </div>
      ))}

      <div class="Links">
        <a id="rab" target="_blank">RAB</a>
        <a id="jetphotos" target="_blank">Jetphotos</a>
        <a id="flightradar" target="_blank">Flightradar24</a>
      </div>
    </div>
  );
}

export default Result;
