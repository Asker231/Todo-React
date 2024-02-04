import React, { useEffect } from 'react';
import style from './app.module.css';
import Header from '../components/Header/Header';
import Home from '../pages/HomePage/Home.jsx';

function App() {
   return (
      <div className={style.app}>
         <Header />
         <div className={style.section}>
         <Home/>

         </div>
      </div>
   );
}

export default App;
