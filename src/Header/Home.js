import React from 'react'
import { CarouselTransition } from '../Mid/CarouselTransition'
import MovieCrousel from '../Mid/Movie/MovieCrousel'
import { MovieIcon } from '../Mid/MovieIcon'
import { Form } from '../Form/Form'




export const Home = () => {
  return (
    <div>
        <CarouselTransition/>
       
        <MovieIcon/>
      <Form/>  
      
    </div>
  )
}
