import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/main' element={<Main />} />
        </Routes>
    </div>
  )
}

export default App;
