import React, {useState, useEffect} from 'react'
import Axios from './Axios'
import Request from './Request'
import './Banner.css'


function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await Axios.get(Request.fetchPopular);
            setMovie(request.data.results [
                Math.floor(Math.random() * request.data.results.length -1)
            ])
            return request;
        }
        fetchData();
    }, []);

    return (
        <header className = "banner"
         style={{
             backgroundSize: "cover",
             backgroundImage:`url(
                 "https://image.tmdb.org/t/p/original//${movie?.backdrop_path}"
                 )`,
             backgroundPosition: "center center"
         }}
        >
            <div className="banner__contents">
                <h1>{movie?.title || movie?.name || movie?.original_name }</h1>
                <button className="banner__btn">Watch</button>
                <button className="banner__btn">My List</button>

                <h1 className="banner__description">
                    {movie?.overview}
                </h1>
            </div>
            <div className="banner--fadeBottom">

            </div>
        </header>
    )
}

export default Banner
