// App.js

import React from 'react';
import './App.css';

import FileUpload from './components/FileUpload';

function App() {
  return (
    <div className="container">
      <h1>Optical Character Recognition (OCR) of e-bills</h1>
      <FileUpload />
    </div>
  );
}

export default App;
