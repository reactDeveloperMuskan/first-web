import React, { useEffect, useState } from 'react'
import { MovieCard } from './MovieCard'
import { NavLink } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

export const MovieIcon = () => {

    const [data, setdata] = useState(null)

    useEffect(() => {
        if (data === null) {
            fetch('https://run.mocky.io/v3/b29ec296-47d4-4efb-9958-d0b3fc4bcbe2', { method: 'POST' })
                .then(Response => Response.json())
                .then(res => setdata(res))
                .catch(err => console.log(err))
        }
    })
    console.log('data', data);
    var settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 0,
        speed: 1500,
        slidesToShow: 5,
        // slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              // slidesToScroll: 1,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              // slidesToScroll: 1,
            },
          },  
          {
            breakpoint: 640,
            settings:{
              slidesToShow:1,
            }
            // settings: 'unslick',
          },
        ],
    
      };


    return (
        <div className=' bg-black p-20'>
            <h1 className='text-white text-3xl font-bold pb-4'>
                Trending Movies      
                    </h1>



            {
                data !== null ?
                    <Slider {...settings}>
                        {
                            data.topTenMovies.map((item, index) => {
                                return (
                                    <NavLink to={'/movie-details/' + index}>
                                        <MovieCard top={item.image === '' ? 'https://eas-tech.net/wp-content/uploads/dummy-post-horisontal.jpg' : item.image} mid={item.title} midtext="198 min" end={item.genre} />
                                    </NavLink>
                                )
                            })
                        }
                    </Slider>
                    :
                    'Loading....'
            }





        </div>
    )
}
