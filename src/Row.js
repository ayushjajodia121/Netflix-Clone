import React ,{useEffect, useState}from 'react';
import './Row.css';
import axios from './axios';



function Row(props) {                         //Destructuring We can write something else also inplace of title means it is only for first value in props

  const img_base_url = 'https://image.tmdb.org/t/p/original';
  
  const [movies,setMovies] = useState([]);
  useEffect(()=>{
    async function fetchData(){
      const request = await axios.get(props.endpoint);
      setMovies(request.data.results);
    }
    fetchData();

  },[])

  console.log(movies);

  // useEffect(()=>{
  //     axios.get(props.endpoint)
  //     .then((request)=>{
  //         // console.log(request.data.results);
  //       setMovies(request.data.results);
  //     }).catch((err)=>{
  //       console.log(err);
  //     })

  //   },[])
   
                         
  return (
    <div className="row">
       <h2>{props.title}</h2>
       <div className="posters">
         {movies.map((movie)=>{
           return(
             <img
             key={movie.id}
               className={`poster ${props.isLarge && 'poster_large'}`}
               src={`${img_base_url}${movie.poster_path}`}
               alt={movie.name}
               />
           )
         })}

       </div>
    </div>
  )
}

export default Row