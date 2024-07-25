import React from 'react'
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className=' bg-black text-white'>
            <div className='flex justify-around '>
                <div className=' grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1'>

                    <div className=' col-span-1 text-white    p-4'>
                        <h1 className='text-4xl font-semibold text-center'> IMAGIC </h1>
                        <h2 className='text-xl font-semibold text-center ' > C I N E M A </h2>
                    </div>
                    <div className=' col-span-1 text-white flex justify-around md:text-2xl text-center gap-5 px-16 pt-10  pb-4 '>
                         <NavLink to={"/home"}> Home </NavLink>
                         <NavLink to={"/scheduel"}> Scheduel </NavLink>
                         <NavLink to={"/movie"}> Movie </NavLink>
                         <NavLink to={"/news"}> News </NavLink>
                    </div>
                    <div className=' col-span-1 text-white   flex justify-around p-9 gap-4 text-3xl'>
                        <FaFacebook />
                        <AiFillTwitterCircle />
                        <IoLogoWhatsapp />
                    </div>
                </div>
            </div>

            <div className='text-center py-10 font-semibold'>
                <h1>INFO@imagiccinema,com</h1>
                <h1>=38(09)0101001</h1>
            </div>
        </div>
    )
}

export default Footer;