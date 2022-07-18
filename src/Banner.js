import React,{useState,useEffect} from 'react'
import axios from './axios';
import requests from './requests';
import './banner.css';
import YouTube from 'react-youtube';

function Banner() {
    const[banner,setBanner]=useState([]);
    useEffect(()=>{
      async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals);
        let i=0;
        setInterval(()=>{
            if(i<20){
            setBanner(request.data.results[i++])}
            else{
                i=0;
                setBanner(request.data.results[i++]);
            }
        },10000);
    }
    fetchData();

    },[])
    function truncate(str,char)
    {
        if(str?.length>char){
            return str.substr(0,char-1)+"...";

        }else{
            return str;
        }
    }


  return (
    <div>
        <header className="banner" style={{
            backgroundImage:`url(https://image.tmdb.org/t/p/original/${banner.backdrop_path})`,
            backgroundSize: 'cover',
            backgroundPosition:'center'
        }}>
        {/* <div className='Trailer'>
            <YouTube></YouTube>
        </div> */}
            <h1 className="BannerHeading">
                {banner.name || banner.original_name || banner.title}
            </h1>
            <div className="buttons">
                <button>Play</button>
                <button>My List</button>
            </div>
            <p className="bannerdesc">{truncate(banner.overview,150)}</p>
        </header>
    </div>
  )
}

export default Banner