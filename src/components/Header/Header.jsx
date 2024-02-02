import React from 'react'
import style from './header.module.css'
import userIcon from '../../icons/UserIcon/UserIcon.svg'

function Header() {
    const[nav,setNav] = useState([
        {path:"/",view:"Главная"},
        {path:"/",view:"Все задачи"},
        {path:"/",view:"Настройки"},
        {path:"/",view:"О нас"},

    ])
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
       <div className={style.user}>
       <img src={userIcon}/>
       </div>
        </div>
    </div>
  )
}

export default Header