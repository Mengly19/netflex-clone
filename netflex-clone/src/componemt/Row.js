import React, {useState, useEffect} from 'react'
import requests from './Request';
import Axios from './Axios'
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title,fetchURL, isLargeRow}) {
    const [movies, setMovie] = useState([])
    useEffect(() => {
        async function fetchData(){
            const request = await Axios.get(fetchURL);
            setMovie(request.data.results)
            return requests;
        } 
         fetchData();
    },[fetchURL])

    console.log(movies)
    return (
        <div className= "row">
        <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie =>(
                    <img 
                    key={movie.id}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                     src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                
                    
                ))}
                
            </div>
        </div>
    )
}

export default Row
