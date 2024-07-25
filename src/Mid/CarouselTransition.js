import React from 'react'
import { Carousel } from 'react-responsive-carousel';
 
 export function CarouselTransition() {
   return (
    <Carousel showThumbs={false} 
    transitionTime={500}
    autoPlay={true} >

    <div>
        <img className='h-[100vh]' src="https://wallpapers.com/images/hd/eddie-brock-venom-hollywood-movie-q82cnqhhnats06cj.jpg" />
        
    </div>
    <div >
        <img className='h-[100vh]' src="https://miro.medium.com/v2/resize:fit:1200/1*o3V9Pg__yNYc1FwJI-Yszg.jpeg" />
        
    </div>
    <div>
    <img className='h-[100vh]' src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2023/04/stranger-things-cartoon.jpg" />
        
    </div>
</Carousel>
   );
 }
    