import React, { useEffect } from 'react';
import style from './app.module.css';
import Header from '../components/Header/Header';
import { getData } from '../api/getData.js';

function App() {
   useEffect(() => {
      async function FetchDataPost() {
         try {
            let result = await getData(
               'https://jsonplaceholder.typicode.com/todos',
            );
            console.log(result);
            return result;
         } catch (error) {
            console.log(error);
         }
      }
      FetchDataPost();
   }, []);
   return (
      <div className={style.app}>
         <Header />
      </div>
   );
}

export default App;
