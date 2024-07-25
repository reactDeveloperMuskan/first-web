import React from 'react'
import { SearchIcon } from '../Icon'
import { IoMdMenu } from "react-icons/io";
import { NavLink } from 'react-router-dom';

export const Header = () => {

    const Clickonbtn = () => {

    }

    return (
        <header className="bg-black p-10">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between ">
                <div className='text-red-800 text-4xl flex'>

                    <span className="text-3xl font-bold text-blue-900 ml-2">
                        <div className='text-white '>
                            <h1 className='text-4xl font-semibold text-center'> IMAGIC </h1>
                            <h2 className='text-xl font-semibold text-center ' > C I N E M A </h2>
                        </div>
                    </span>

                </div>

                {/* Navigation Links - Desktop */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-10 items-center ">
                        <li><NavLink to={"/home"} href="#" className="text-2xl font-semibold text-white hover:text-blue-600">Home</NavLink></li>
                        <li><NavLink to={"/scheduel"} href="#" className="text-2xl font-semibold text-white hover:text-blue-600">Scheduel</NavLink></li>
                        <li><NavLink to={"/movie"} href="#" className="text-2xl font-semibold text-white hover:text-blue-600">Movie</NavLink></li>
                        <li><NavLink to={"/news"} href="#" className=" text-2xl font-semibold text-white hover:text-blue-600">News</NavLink></li>
                        <div className='text-white  hover:text-blue-600'>
                            {SearchIcon}
                        </div>
                        <div className='text-center'>
                            <NavLink to={"/signup"} className='px-5 py-2 bg-red-600 rounded-md text-white hover:bg-blue-500'> SignUp </NavLink>
                        </div>
                    </ul>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => Clickonbtn()} className="text-white focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (hidden by default) */}
            <div className="mobile-menu md:hidden bg-white m-10 hidden">
                <ul className="flex flex-col space-y-2 px-4 py-2">
                    <li><NavLink to={"/home"} href="#" className="text-xl font-semibold text-gray-800 hover:text-blue-600">Home</NavLink></li>
                    <li><NavLink to={"/scheduel"} href="#" className="text-xl font-semibold text-gray-800 hover:text-blue-600">Scheduel</NavLink></li>
                    <li><NavLink to={"/movie"} href="#" className="text-xl font-semibold text-gray-800 hover:text-blue-600">Movie</NavLink></li>
                    <li><NavLink to={"/news"} href="#" className="text-xl font-semibold text-gray-800 hover:text-blue-600">News</NavLink></li>
                    <li><NavLink to={"/signup"} href="#" className="text-xl font-semibold text-gray-800 hover:text-red-600">sign up</NavLink></li>
                </ul>
            </div>
        </header>
        // <div>
        //     <div className='bg-black flex justify-around p-5'>
        //         <div className='text-white'>
        //             <h1 className='text-4xl font-semibold text-center'> IMAGIC </h1>
        //             <h2 className='text-xl font-semibold text-center ' > C I N E M A </h2>
        //         </div>
        //         <div className='text-white flex justify-around  text-center w-1/2 items-center'>
        //             <h1> Home </h1>
        //             <h1> Scheduel </h1>
        //             <h1> Movie </h1>
        //             <h1> News </h1>
        //             <div className='text-white'>
        //                 {SearchIcon}
        //             </div>
        //             <div className='text-center'>
        //                 <button className='px-5 py-2 bg-red-600 rounded-md '> Sign Up </button>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
