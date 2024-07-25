import React from 'react'
import { Md18UpRating } from "react-icons/md";
import { CgPlayButton } from "react-icons/cg";
import { CiSaveUp2 } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";

export const MovieDetailCard = ( {img , moviename , year , genre , time ,no , rating , end} ) => {
    return (
        <div className='bg-black grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-10'>


            <div className=' col-span-1 p-5'>
                <div className='sm:text-center '>
                    <img className='pt-6 h-[60vh]' src={img} />
                </div>
                
            </div>


            <div className=' col-span-2 lg:pt-10 text-white  pt-6 w-2/3 pl-10'>
                    <h1 className='text-3xl text-white font-bold'> {moviename} </h1>
                    <div className='flex gap-5 pt-6'>
                        <p> {year}</p>
                        <p> {time} </p>
                        <p> {no} </p>
                    </div>
                    <p className='pt-1'>{genre}</p>
                    <div className='flex gap-1 pt-3'>
                        <div className='text-3xl text-yellow-500'>
                            <Md18UpRating />
                        </div>
                        <p className='text-xl'>{rating}</p>
                    </div>
                    <div className='flex gap-6 items-center py-6'>
                        <button className='bg-white text-black rounded-full text-lg font-bold flex items-center pr-5 pl-2 py-1 '> <div className='text-4xl'><CgPlayButton /></div> Watch Free</button>
                        <div className='text-3xl font-bold flex gap-6'>
                            <CiBookmark />
                            <CiSaveUp2 />
                        </div>
                    </div>
                    <div>
                        <p className='text-sm text-gray-300 capitalize'>
                           {end}
                        </p>
                    </div>
                </div>

        </div>
    )
}
