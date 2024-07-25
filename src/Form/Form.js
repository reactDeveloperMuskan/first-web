import React, { useState } from 'react'

export const Form = () => {

    const [name,setName] = useState('')
    const [number,setNumber] = useState('')
    
    const onsubmit = () =>{

        var json = {
            "name" : name,
            "contact" : number
        }

        console.log(json);

    }
  
    return (
        <div className='bg-slate-800 grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 p-20' >
            <div className='col-sapn-1 ' >
                <h1 className='lg:text-5xl md:text-5xl  sm:text-4xl text-2xl capitalize text-gray-400 font-bold'>
                    What are
                </h1>
                <h1 className='lg:text-5xl md:text-5xl sm:text-4xl text-2xl capitalize text-gray-400 font-bold'>
                    you looking for?
                </h1>
                <div className=' '>
                    <img className='sm:hidden md:block lg:block hidden lg:h-[300px]:' src='https://www.headsupb2b.com/_next/static/media/query.89373971.svg' />
                </div>
            </div>
                <div className='col-span-2 pl-5 text-white'>
                    <div className='pt-4'>
                        <div className='py-2'>Name</div>
                        <input onChange={(e)=>setName(e.target.value)} className=' w-full h-10 rounded-lg  text-black pl-4' type='text' name='firstName' placeholder='Enter name' />
                    </div>
                    <div>
                        <div className='py-2'>Contact Number</div>
                        <input onChange={(e)=>setNumber(e.target.value)} className=' w-full h-10 rounded-lg text-black pl-4' type='number' name='contact' placeholder='Contact Number' />
                    </div>

                    <div className='py-2'>
                        <div className='py-2'> Pincode of delivery</div>
                        <input className=' text-black w-full h-10 rounded-lg pl-4' type='text' name='address' placeholder='Enter name' />
                    </div>
                    <div className=' flex justify-center pt-8'>
                        <button onClick={()=>onsubmit()} className='bg-red-800 py-3 px-8 text-xl font-bold rounded-xl '>
                            Submit
                        </button>
                    </div>


                </div>
        </div>
    )
}
