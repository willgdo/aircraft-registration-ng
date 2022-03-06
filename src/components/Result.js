import React, { Fragment } from 'react';
import '../styles/Result.css';

const formatPrefix = (reg) => {
  const registration = reg.slice(0, 2) + '-' + reg.slice(2, 5).toString();

  return registration;
}

const Result = (data) => {
  return (
    <div className="Card">
      {data.data.length > 0 ? (
        <Fragment>
          {data.data.map((reg, i) => (
            <div key={i}>
              <h2 id="prefix"> {formatPrefix(reg.MARCA)} </h2>

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
                <a
                  href={`https://sistemas.anac.gov.br/aeronaves/cons_rab_resposta.asp?textMarca=${reg.MARCA}`}
                  id="rab"
                  target="_blank"
                  rel="noreferrer">
                  RAB
                </a>
                <a
                  href={`https://www.jetphotos.com/photo/keyword/${formatPrefix(reg.MARCA)}`}
                  id="jetphotos"
                  target="_blank"
                  rel="noreferrer">
                  Jetphotos
                </a>
                <a
                  href={`https://www.flightradar24.com/data/aircraft/${reg.MARCA.toLowerCase()}`}
                  id="flightradar"
                  target="_blank"
                  rel="noreferrer">
                  Flightradar24
                </a>
              </div>
            </div>
          ))}
        </Fragment>
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
            <a id="jetphotos" target="_blank">Jetports</a>
            <a id="flightradar" target="_blank">Flightradar24</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Result;
