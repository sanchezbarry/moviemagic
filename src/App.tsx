import * as React from 'react';
import { Link} from 'react-router-dom';
import Main from './Main';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
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
    </>
  )
}
