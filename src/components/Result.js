import React from 'react';
import '../styles/Result.css';

const Result = (data) => {

    console.log(data);   

  return (
    <div className="Card">
      <h2 id="prefix"> PR-AYX </h2>

      <div className="Tags">
        <div>Fabricante:&nbsp;</div>
        <div id="manufacturer"> </div>
      </div>

      <div className="Tags">
        <div>Modelo:&nbsp;</div>
        <div id="model"> </div>
      </div>

      <div className="Tags">
        <div>Ano:&nbsp;</div>
        <div id="year"> </div>
      </div>

      <div className="Tags">
        <div>Operador:&nbsp;</div>
        <div id="operator"> </div>
      </div>

      <div className="Links">
        <a id="rab" target="_blank">RAB</a>
        <a id="jetphotos" target="_blank">Jetphotos</a>
        <a id="flightradar" target="_blank">Flightradar24</a>
      </div>
    </div>
  );
}

export default Result;
