import React,{useEffect, useState} from 'react'
import style from './home.module.css'
import {getData} from '../../api/getData.js'
import CardNews from '../../components/CardNews/CardNews.jsx';

function Home() {
   const[arrNews,setNews] = useState([])
    useEffect(() => {
        async function FetchDataPost() {
           try {
              let result = await getData(
                 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9abdfb17ef904b5da4f286d834c4c3c0',
              );
              setNews(result.articles)
              console.log(result.articles);
              return result;
           } catch (error) {
              console.log(error);
           }
        }
        FetchDataPost();
     }, []);
  return (
    <div className={style.homeView}>
         {
            arrNews.map((el,ind)=>{
               return <CardNews title={el.title} author={el.author} publishedAt={el.publishedAt} url={el.urlToImage}/>
            })
         }
    </div>
  )
}

export default Home