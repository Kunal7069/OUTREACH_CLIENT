import React from 'react';
import './App.css';
import RegisterForm from './components/RegisterForm';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <div className="container">
      <h1>API Interaction Portal</h1>
      <RegisterForm />
      <hr />
      <UploadForm />
    </div>
  );
}

export default App;
