import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';


type Movie = {
    id: string;
    name: string;
    productionYear: number;
    genre: string;
    synopsisShort: string;
    synopsis: string;
  };

  function useMovies() {
    const [movies, setMovies] = useState<Movie[]>([])

    
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

const Home = () => {
    const movies = useMovies();



    return (
    <>  

      <Container>
        <Row>
          <ButtonGroup aria-label="year filter">
            <Button variant="secondary"><Link style={{ color: 'white', textDecoration: 'none'}} to={"YearFilter/2003"}>2003</Link></Button>
            <Button variant="secondary"><Link style={{ color: 'white', textDecoration: 'none'}} to={"YearFilter/2006"}>2006</Link></Button>
            <Button variant="secondary"><Link style={{ color: 'white', textDecoration: 'none'}} to={"YearFilter/2010"}>2010</Link></Button>
            <Button variant="secondary"><Link style={{ color: 'white', textDecoration: 'none'}} to={"YearFilter/2013"}>2013</Link></Button>
            <Button variant="secondary"><Link style={{ color: 'white', textDecoration: 'none'}} to={"YearFilter/2015"}>2015</Link></Button>
            <Button variant="secondary"><Link style={{ color: 'white', textDecoration: 'none'}} to={"YearFilter/2016"}>2016</Link></Button>
            <Button variant="secondary"><Link style={{ color: 'white', textDecoration: 'none'}} to={"YearFilter/2018"}>2018</Link></Button>
          </ButtonGroup>
        </Row>


        <Row>
          <ButtonGroup aria-label="genre filter">
            <Button variant="secondary"><Link style={{ color: 'white', textDecoration: 'none'}} to={"GenreFilter/Action"}>Action</Link></Button>
            <Button variant="secondary"><Link style={{ color: 'white', textDecoration: 'none'}} to={"GenreFilter/Adventure"}>Adventure</Link></Button>
            <Button variant="secondary"><Link style={{ color: 'white', textDecoration: 'none'}} to={"GenreFilter/Animation"}>Animation</Link></Button>
            <Button variant="secondary"><Link style={{ color: 'white', textDecoration: 'none'}} to={"GenreFilter/Comedy"}>Comedy</Link></Button>
            <Button variant="secondary"><Link style={{ color: 'white', textDecoration: 'none'}} to={"GenreFilter/Fantasy"}>Fantasy</Link></Button>
          </ButtonGroup>
        </Row>

        </Container>


      <Container>
      <Row>
      
      {movies.map(movie => (
        
        <Col>
        <h3 key={movie.id}>{movie.name}</h3>
        <h5>{movie.id}</h5>
        <em>{movie.productionYear}</em>
        <br/>
        <h6>{movie.genre}</h6>
        <p>{movie.synopsisShort}</p>
        <Button variant="secondary"><Link style={{ color: 'white', textDecoration: 'none'}} to={`MovieViewPage/${movie.name}`}>View</Link></Button>
        </Col>
      
      ))}
    
    </Row>
    </Container>


    </>
    )
}
export default Home;