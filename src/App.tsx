import * as React from 'react';
import { Link} from 'react-router-dom';
import Main from './Main';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

type Movie = {
  name: string;
  title: string;
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

export default function App() {
  const movies = useMovies();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/'>Home</Link>
            <Link to='/'>Home</Link>
            <Link to='/'>Home</Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <ul>
          <li><Link to='/'>Home</Link></li>
        </ul>
        <hr />
        <Main />       
      </div>   

      <ul>
      {movies.map(movie => (
        <li key={movie.name}>{movie.title}</li>
      ))}
      {movies.map(movie => (
        <li>{movie.name}</li>
      ))}
    </ul>
    </>
  )
}
