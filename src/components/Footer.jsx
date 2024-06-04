
import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-around">
          <div className="w-full sm:w-1/3 lg:w-1/4 mb-6">
            <h3 className="text-xl font-semibold border-b-2 border-gray-600 pb-2 mb-4">Company</h3>
            <p>1234 Street Name</p>
            <p>City, State, ZIP</p>
            <p>Email: info@company.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="w-full sm:w-1/3 lg:w-1/4 mb-6">
            <h3 className="text-xl font-semibold border-b-2 border-gray-600 pb-2 mb-4">Quick Links</h3>
            <ul className='flex flex-col gap-2'>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/user'>User</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/gellary'>Gellary</NavLink>
            </ul>
          </div>
          <div className="w-full sm:w-1/3 lg:w-1/4 mb-6">
            <h3 className="text-xl font-semibold border-b-2 border-gray-600 pb-2 mb-4">Follow Us</h3>
            <div className="flex flex-col gap-2">
              <NavLink to=''>Facebook</NavLink>
              <NavLink to=''>Instagram</NavLink>
              <NavLink to=''>YouTube</NavLink>
              <NavLink to=''>Twitter</NavLink>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-gray-600 pt-4">
          <p>&copy; 2024 Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
