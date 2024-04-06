import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'

function App() {
  return (
    <Routes>
      <Route path='/' element= { <Home /> }></Route>
      <Route path='/courses' element= { <Courses /> }></Route>
    </Routes>
  );
}

export default App;
