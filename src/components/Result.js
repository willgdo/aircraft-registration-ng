import React from 'react';
import '../styles/Result.css';

const Result = (data) => {
  return (
    <div className="Card">
      {data.data.length > 0 ? (
        <div>
          {data.data.map((reg, i) => (
            <div key={i}>
              <h2 id="prefix"> {reg.MARCA.slice(0, 2) + '-' + reg.MARCA.slice(2, 5)} </h2>

              <div className="Tags">
                <div>Fabricante:&nbsp;</div>
                <div id="manufacturer">{reg.NMFABRICANTE}</div>
              </div>

              <div className="Tags">
                <div>Modelo:&nbsp;</div>
                <div id="model">{reg.DSMODELO}</div>
              </div>

              <div className="Tags">
                <div>Ano:&nbsp;</div>
                <div id="year">{reg.NRANOFABRICACAO}</div>
              </div>

              <div className="Tags">
                <div>Operador:&nbsp;</div>
                <div id="operator">{reg.NMOPERADOR}</div>
              </div>

              <div className="Links">
                <a id="rab" target="_blank">RAB</a>
                <a id="jetphotos" target="_blank">Jetphotos</a>
                <a id="flightradar" target="_blank">Flightradar24</a>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h2 id="prefix"> - </h2>

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
      )}

    </div>
  );
}

export default Result;
