// import { useState } from 'react'
import './App.css'
import HomePage from './HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WaitlistForm from './WaitlistForm';
import { LanguageProvider } from './LanguageContext'

function App() {


  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/waitlist" element={<WaitlistForm />} />
        </Routes>
      </Router>
    </LanguageProvider>
  )
}

export default App
