import React, { useState, useEffect } from 'react';
import axios from './axios';

import './components/Card.css';

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl); // 'http://www.omdbapi.com/?apikey=f170DCA4&' + '/movie/top_rated?api_key=${API_KEY}&language=en-US'
      //console.log(request)
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]); //if [], run once when the row loads, and dont run it again

  console.log(movies);

  const imageBaseUrl = 'https://image.tmdb.org/t/p/w300'; //image basee url and size /w300

  return (
    <div>
      <div className="genres-container">
        <h2 className="genres-title">{title}</h2>
      </div>

      <div className="card-container">
        {movies.map((data, i) => {
          //console.log(imageBaseUrl + data.poster_path)
          return (
            <div key={i} className="card">
              <img
                className="card-poster"
                src={imageBaseUrl + data.poster_path}
                alt="data"
              />
              <h3 className="card-title">{data.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Row;
