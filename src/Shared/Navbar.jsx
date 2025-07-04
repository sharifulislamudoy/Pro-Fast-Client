import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../Components/Logo';

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to={'/services'}>Services</NavLink></li>
        <li><NavLink to={'/coverage'}>Coverage</NavLink></li>
        <li><NavLink to={'/about'}>About Us</NavLink></li>
        <li><NavLink to={'pricing'}>Pricing</NavLink></li>
        <li><NavLink to={'rider'}>Be a Rider</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 rounded-2xl w-11/12 mx-auto sticky inset-0 top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <Logo />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                <Link to={'/auth/login'} className='btn'>Sign In</Link>
                <a className="btn btn-primary border-none shadow-none">Be a rider</a>
            </div>
        </div>
    );
};

export default Navbar;