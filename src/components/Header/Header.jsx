import React from 'react';
import style from './header.module.css';
import userImage from '../../assets/user.jpeg';
import { useState } from 'react';
import CardUser from '../CardUser/CardUser.jsx';
import { useLocation } from 'react-router-dom';
import TextField from '../TextField/TextField.jsx';

function Header() {
   const [openCard, setOpen] = useState(false);
   const [pathLocation, setLocal] = useState(0);

   const [nav, setNav] = useState([
      {
         path: '/',
         view: 'Home',
         setLocation: () => setLocal(0),
      },

      {
         path: '#',
         view: 'All news',
         setLocation: () => setLocal(1),
      },
      {
         path: '#',
         view: 'Setting',
         setLocation: () => setLocal(2),
      },
      {
         path: '#',
         view: 'About',
         setLocation: () => setLocal(3),
      },
   ]);

   const location = useLocation();
   console.log(location.pathname);

   function OpenCardUser() {
      setOpen(!openCard);
   }
   return (
      <div className={style.header}>
         <div className={style.wrap}>
            <span className={style.logo}>KNews</span>
            <div id={style.textf}>
            <TextField  />

            </div>
            <div className={style.left}>
               <div className={style.nav}>
                  {nav.map((el, ind) => {
                     return (
                        <a
                           key={ind}
                           onClick={() => el.setLocation()}
                           href={el.path}
                        >
                           {el.view}
                        </a>
                     );
                  })}
               </div>
               <div onClick={() => OpenCardUser()} className={style.user}>
                  <img src={userImage} />
               </div>
            </div>
            <div
               style={{
                  top: openCard ? '60px' : '-260px',
                  opacity: openCard ? '1' : '0',
               }}
               className={style.cardUser}
            >
               <CardUser />
            </div>
         </div>
      </div>
   );
}

export default Header;
