import React from 'react'
import { Header } from './Header/Header'
import Footer from './Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Header/Home';
import { Scheduel } from './Header/Scheduel';
import { Movie } from './Header/Movie';
import { News } from './Header/News';
import { SignUp } from './Header/SignUp';
import { MovieDetail } from './Mid/Movie/MovieDetail';

const App = () => {
  return (
    <div> 
      <Header/>
      
      <Routes>
        <Route path='/home' exact element={<Home/>}/>
        <Route path='/scheduel' exact element={<Scheduel/>}/>
        <Route path='/movie' exact element={<Movie/>}/>
        <Route path='/news' exact element={<News/>}/>
        <Route path='/signup' exact element={<SignUp/>}/>
        <Route path='/movie-details/:number' exact element={<MovieDetail/>}/>
      </Routes>
      
     <Footer/>

    </div>
  )
}

export default App;
