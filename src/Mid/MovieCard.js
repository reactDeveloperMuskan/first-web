import React from 'react'


export const MovieCard = ({ top , mid ,midtext, slash, end }) => {
  return (
    <div>
        <div className='bg-black p-6'>
            <img className='rounded-lg h-[45vh] w-full' src={top} />
            <h1 className='text-white pt-4'> {mid} </h1>
            <div className='text-gray-400 flex justify-between items-center  pt-4'>
            <p className='text-gray-400 '> {midtext} </p>
            <p className='text-sm'>|</p>
            <p className='text-sm'>{end}</p>
            </div>
        </div>
        
    </div>
  )
}
