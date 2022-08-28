import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import FirstPage from './components/pages/FirstPage'
import SecondPage from './components/pages/SecondPage';
import Rejected from './components/pages/Rejected'
import Website from './components/pages/Website';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/second' element={<SecondPage />} />
        <Route path='/rejected' element={<Rejected />} />
        <Route path='/website' element={<Website />} />
      </Routes>
    </BrowserRouter>
  )
}
