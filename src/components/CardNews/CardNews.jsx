import React from 'react'
import style from './cardnews.module.css'

function CardNews({
    title,
    source,
    author,
    url,
    publishedAt
}){
  return (
    <div className={style.cardnews}>
        <div className={style.top_hstack}>
            <span>{author}</span>
            <span>{publishedAt}</span>
        </div>
        <img src={url} alt="" />
        <h2>{title}</h2>
    </div>
  )
}

export default CardNews