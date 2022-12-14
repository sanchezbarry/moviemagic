import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import MovieViewPage from './components/MovieViewPage';

const Main = () => {
return (         
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/moviemagic/:id' element={<MovieViewPage/>} />
  </Routes>
);
}
export default Main;