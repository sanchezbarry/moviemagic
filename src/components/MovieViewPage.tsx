import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


const singleMovieApi = 'https://remarkable-bombolone-51a3d9.netlify.app/.netlify/functions/movies/:id';

type Movie = {
    id: string;
    name: string;
    productionYear: number;
    genre: string;
    synopsisShort: string;
    synopsis: string;
  };

  function useMovies() {
    const [movies, setMovies] = useState<Movie[]>([]);
    
    useEffect(() => {
      async function fetchMovies() {
        const response = await fetch('https://remarkable-bombolone-51a3d9.netlify.app/.netlify/functions/movies');
        const data = await response.json();
        setMovies(data);
      }
      
      fetchMovies();
    }, []);
    
    return movies;
  }  

  const MovieViewPage = () => {
    const movies = useMovies();
    const params = useParams();
    console.log("params: " + JSON.stringify(params))
    const conditionalParams = params.id
    console.log(conditionalParams)



    return (   
      <>
      {movies.map(movie =>  
      ( 
        movie.name === conditionalParams
        
        ?
        <Col>
        <h3 key={movie.id}>{movie.name}</h3>
        <h5>{movie.id}</h5>
        <em>{movie.productionYear}</em>
        <br/>
        <h6>{movie.genre}</h6>
        <p>{movie.synopsisShort}</p>
        <Link to="/moviemagic">Back</Link>
        </Col>
        : null
      ))}

      </>
    )
  }

export default MovieViewPage;