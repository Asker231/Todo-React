import React from 'react';
import style from './textfield.module.css';
import Search from '../../icons/Search/Search.svg';

function TextField() {
   return (
      <div className={style.textfield}>
         <input className={style.input} type="text" />
         <button className={style.search}>
            <img src={Search} alt="" />
         </button>
      </div>
   );
}

export default TextField;
