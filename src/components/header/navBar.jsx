import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {

  const aStyles = "text-green-400";
  const iStyles = "text-white";

  return (
    <div className='shadow-md w-full  top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-gray-600 py-4 md:px-10 px-7 '>
        <div className='font-bold text-2x1 cursor-pointer
        flex items-center font-[Poppins]'>
          <span>
            <img src="SGE.png" className="w-14" />
          </span>
        </div>
        
          <div className='md:ml-8 text-xl md: space-x-4 '>
          <NavLink to={'/'} className={({isActive}) => `${isActive?aStyles:iStyles} hover:text-green-400`}>Página inicial</NavLink>
          <NavLink to={'/signin'} className={({isActive}) => `${isActive?aStyles:iStyles} hover:text-green-400`}>Sign in </NavLink>
          <NavLink to={'/signUp'} className={({isActive}) => `${isActive?aStyles:iStyles} hover:text-green-400`}>Sign Up</NavLink>
          </div>
      </div>
    </div>
  )
}

