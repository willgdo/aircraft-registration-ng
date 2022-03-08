import React from 'react';
import '../styles/Tooltip.css';

const Tooltip = () => {
  return (
    <div className="Tooltip">
      <span className="Icon">?</span>
      <p>Olá!</p>
      <p>
        Essa página foi desenvolvida para pessoas que apreciam a aviação,
        ajudando na busca de informações de aeronaves civis brasileiras,
        tendo como fonte o <a href="https://sistemas.anac.gov.br/aeronaves/cons_rab.asp" target="_blank" rel="noreferrer">RAB</a>.
      </p>
      <p>
        Criado por <strong>Willian Oliveira</strong><br/>
        Desenvolvedor | Piloto privado<br/>
        willian.oliveira14@fatec.sp.gov.br
      </p>
    </div>
  );
}

export default Tooltip;