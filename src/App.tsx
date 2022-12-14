import * as React from 'react';
import { Link} from 'react-router-dom';
import Main from './Main';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

type Movie = {
  id: number;
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

export default function App() {
  const movies = useMovies();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Movie Magic</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>

      <DropdownButton id="dropdown-basic-button" title="Filter By Year">
        <Dropdown.Item href="#/action-1">2003</Dropdown.Item>
        <Dropdown.Item href="#/action-2">2006</Dropdown.Item>
        <Dropdown.Item href="#/action-3">2010</Dropdown.Item>
        <Dropdown.Item href="#/action-3">2013</Dropdown.Item>
        <Dropdown.Item href="#/action-3">2015</Dropdown.Item>
        <Dropdown.Item href="#/action-3">2016</Dropdown.Item>
        <Dropdown.Item href="#/action-3">2018</Dropdown.Item>
      </DropdownButton>

      <DropdownButton id="dropdown-basic-button" title="Filter By Genre">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Animation</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Comedy</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Fantasy</Dropdown.Item>
      </DropdownButton>

      <Container>
      <Row>
      
      {movies.map(movie => (
        
        <Col>
        <h3 key={movie.id}>{movie.name}</h3>

        <em>{movie.productionYear}</em>
        <br/>
        <h6>{movie.genre}</h6>
        <p>{movie.synopsisShort}</p>
        <Button variant="secondary">View</Button>
        </Col>
      
      ))}
    
    </Row>
    </Container>
    </>
  )
}
