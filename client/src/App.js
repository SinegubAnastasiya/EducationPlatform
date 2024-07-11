import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home'
import Courses from './pages/Courses/Courses'
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import SingleCourse from './pages/SingleCourse/SingleCourse';

function App() {
  return (
    <Routes>
      <Route path='/' element= { <Home /> }></Route>
      <Route path='/course' element= { <Courses /> }></Route>
      <Route path='/signIn' element= { <SignIn /> }></Route>
      <Route path='/signUp' element= { <SignUp /> }></Route>
      <Route path='/singleCourse/:id' element= { <SingleCourse /> }></Route>
    </Routes>
  );
}

export default App;