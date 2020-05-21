import React from 'react';
import './App.css';
import SampleButton from './js/sample/containers/sampleButton';
import SampleHeader from './js/sample/components/sampleHeader';
import SampleBody from './js/sample/components/sampleBody';
import SampleTab from './js/sample/components/sampleTab';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SampleTab />
        <SampleBody/>
        <SampleHeader/>
        <SampleButton/>

      
      </header>
      
    </div>
  );
}

export default App;
