import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from './Button';

export const NavBar = () => {

  const aStyles = "text-green-100";
  const iStyles = "text-green-600";

  return (
    <div className='shadow-md w-full  top-0 left-0 '>
      <div className='md:flex items-center justify-between bg-zinc-800 py-4 md:px-10 px-7 '>
        <div className='font-bold text-2x1 cursor-pointer
        flex items-center font-[Poppins]'>
          <span>
            <img src="SGE.png" className="w-14" />
          </span>
        </div>
        
          <div className='md:ml-8 text-xl md: space-x-4 '>
          <NavLink to={'/'} className={({isActive}) => `${isActive?aStyles:iStyles} hover:text-green-400`}>Página inicial</NavLink>
          <NavLink to={'/student-list-page'} className={({isActive}) => `${isActive?aStyles:iStyles} hover:text-green-400`}>Estudantes</NavLink>
          <NavLink to={'/sobre'} className={({isActive}) => `${isActive?aStyles:iStyles} hover:text-green-400`}>Sobre</NavLink>
          <NavLink to={'/contacto'} className={({isActive}) => `${isActive?aStyles:iStyles} hover:text-green-400`}>Contacto</NavLink>
          </div>
      </div>
    </div>
  )
}

