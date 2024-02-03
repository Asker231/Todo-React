import React from 'react'
import style from './carduser.module.css'
import userImage from '../../assets/user.jpeg'

function CardUser() {

  return (
    <div className={style.cardUser}>
      <div className={style.hstack}>
      <div className={style.todos}>
        <span>Todos</span>
        <span style={{color:"#C2E88D"}}>+40</span>
      </div>
      <div className={style.logo}><img src={userImage} alt="user"/></div>
      <div className={style.followers}>
        <span>Follow</span>
        <span style={{color:"#C2E88D"}}>240</span>
      </div>
      </div>
      <button className={style.btn}>Out</button>
    </div>
  )
}

export default CardUser