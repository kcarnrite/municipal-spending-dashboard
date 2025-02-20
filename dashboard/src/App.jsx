import { useState, useReducer } from 'react'
import './index.css'
import NavigationBar from './NavigationBar';
import AboutPage from './pages/AboutPage';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <div>
      <NavigationBar />
    <CategoryPage />
    </div>

      //<AboutPage />

  )
  
}

export default App
