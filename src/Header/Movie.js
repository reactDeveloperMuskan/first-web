import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MovieCard } from '../Mid/MovieCard'


export const Movie = () => {
  const [data, setdata] = useState(null)

  useEffect(() => {
    if (data === null) {
      fetch('https://run.mocky.io/v3/b29ec296-47d4-4efb-9958-d0b3fc4bcbe2', { method: 'POST' })
        .then(Response => Response.json())
        .then(res => setdata(res))
        .catch(err => console.log(err))
    }
  })
  return (
    <div className=' bg-black p-20'>
      <h1 className='text-white text-3xl font-bold pb-4'>
        Trending Movies
      </h1>


      <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2'>
      {
        data !== null ?


          data.topTenMovies.map((item, index) => {
            return(
              
              <NavLink to={'/movie-details/' + index}>
                <MovieCard top={item.image === '' ? 'https://eas-tech.net/wp-content/uploads/dummy-post-horisontal.jpg' : item.image} mid={item.title} midtext="198 min" end={item.genre} />
              </NavLink>
            
            )
          })


          :
          'Loading....'
      }
</div>
    </div>
  )





}
