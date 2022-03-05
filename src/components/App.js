import React, { useState } from 'react';
import '../styles/App.css';
import Result from './Result';
import Search from './Search';
import Tooltip from './Tooltip';

const App = () => {
  const [reg, setReg] = useState('');

  return (
    <div className="Container">
      <section className="Left">
      <Search setProps={setReg}/>
      </section>
      <section className="Right">
        <Result data={reg}/>
      </section>
      <Tooltip />
    </div>
  );
}

export default App;
