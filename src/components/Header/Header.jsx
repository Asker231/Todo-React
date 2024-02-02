import React from 'react'
import style from './header.module.css'
import userIcon from '../../icons/UserIcon/UserIcon.svg'
import {useState} from 'react'
import  CardUser  from "../CardUser/CardUser.jsx";

function Header() {
    const[openCard,setOpen] = useState(false)
    const[nav,setNav] = useState([
        {path:"/",view:"Главная"},
        {path:"#",view:"Все задачи"},
        {path:"#",view:"Настройки"},
        {path:"#",view:"О нас"},

    ])
    function OpenCardUser() {
        setOpen(!openCard)
    }
  return (
    <div className={style.header}>
       <span className={style.logo}>Todo</span>
        
        <div className={style.left}>
        <div  className={style.nav}>
        {
         nav.map((el)=>{
            return <a href={el.path}>{el.view}</a>
            })
        }
       </div>
       <div onClick={()=>OpenCardUser()}  className={style.user}>
       <img src={userIcon}/>
       </div>
       </div>
       <div style={{top:openCard ? "60px" : "-260px" ,opacity:openCard?"1":"0"}} className={style.cardUser}>
        <CardUser/> 
       </div>
    </div>
  )
}

export default Header