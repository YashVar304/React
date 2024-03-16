import React from 'react'
import { Link,NavLink } from 'react-router-dom'

function Header() {
    return (
         <header className='shadow sticky top-0 z-50'>
            <nav className='bg-white border-gray-200 px-4 lg:px-6 py-2.5'>
                <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
                    <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="" className='mr-3 h-12' />
                    <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                        <li>
                            <NavLink to="/" className={({isActive})=>`block py-2 pr-4 pl-3 ${isActive ? "text-orange-700" : "text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about" className={({isActive})=>`block py-2 pr-4 pl-3 ${isActive?"text-orange-700":"text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contactus" className={({isActive})=>`block py-2 pr-4 pl-3 ${isActive?"text-orange-700":"text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                                Contact Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/github" className={({isActive})=>`block py-2 pr-4 pl-3 ${isActive?"text-orange-700":"text-gray-700"} duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`}>
                                GitHub
                            </NavLink>
                        </li>
                    </ul>
                    <div className='flex items-center gap-3 mr-3'>
                        <a href="">Login</a>
                        <div className='bg-orange-400 h-10 flex items-center px-3 rounded-md'>
                            <a href="">Get Started</a>
                        </div>
                    </div>
                </div>
            </nav>
         </header>
    )
}

export default Header
