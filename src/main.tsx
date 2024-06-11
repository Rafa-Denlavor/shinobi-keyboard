import './styles/global.scss';
import React from 'react'
import ReactDOM from 'react-dom/client'
import GamePage from './pages';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GamePage />
  </React.StrictMode>,
)
