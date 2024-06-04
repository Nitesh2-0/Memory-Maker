import React from 'react'
import {NavLink} from 'react-router-dom'
const Nav = () => {
  return (
    <div className='fixed w-full top-0 bg-gray-700 text-gray-100 flex gap-10 justify-center px-4 py-5 z-50 shadow-lg'>
      <NavLink className={(e) => e.isActive ? `text-red-500 font-semibold`:''} to='/'>Home</NavLink>
      {/* <NavLink className={(e) => e.isActive ? `text-red-500 font-semibold`:''} to='/user'>User</NavLink> */}
      <NavLink className={(e) => e.isActive ? `text-red-500 font-semibold`:''} to='/about'>About</NavLink>
      <NavLink className={(e) => e.isActive ? `text-red-500 font-semibold`:''} to='/gellary'>Gellary</NavLink>
    </div>
  )
}

export default Nav;