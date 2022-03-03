import React from 'react';
import '../styles/App.css';
import Result from './Result';
import Search from './Search';
import Tooltip from './Tooltip';

const App = () => {
  return (
    <div className="Container">
      <section className="Left">
        <Search />
      </section>
      <section className="Right">
        <Result/>
      </section>
      <Tooltip />
    </div>
  );
}

export default App;
