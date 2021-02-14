import React, { useState, useEffect } from 'react';
import axios from "../axios"
import "./css/Row.css";

function Row({ title, fetchUrl, isLargeRow = false}) { // false by default

    const [movies, setMovies] = useState([]);

    const base_url = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        async function fetchData() {
            const request  = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchUrl]); // anytime when dependent on variable outside of useEffect, put it in dependency array

    console.log(movies);

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    ((isLargeRow && movie.poster_path) || // conditional to fix dead links that might come up
                    (!isLargeRow && movie.backdrop_path)) && (
                        <img
                        className ={`row__poster ${isLargeRow && 'row__posterLarge'}`} 
                        key={movie.id} // everytime rendering out a bunch of things, pass in a key
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} 
                        alt={movie.name}
                        />
                    )
                ))}
            </div>
        </div>
    )
}

export default Row
