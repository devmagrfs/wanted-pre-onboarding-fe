import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Login from './pages/Login';
import Main from './pages/Main';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className='App'>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Main />} />
        </Routes>
    </div>
    </ThemeProvider>
  )
}

export default App;
