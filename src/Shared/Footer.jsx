import React from 'react';
import Logo from '../Components/Logo';
import { Link } from 'react-router';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-black text-primary-content p-10">
            <aside>
                <Logo />
                <br />
                <p className="font-light w-2/3 mx-auto">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.
                </p>
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
            </aside>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link>Services</Link>
                    <Link>Coverage</Link>
                    <Link>About Us</Link>
                    <Link>Pricing</Link>
                    <Link>Blog</Link>
                    <Link>Contact</Link>
                </div>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <Link><FaLinkedin className='w-6 h-auto hover:text-blue-950 ' /></Link>
                    <Link><FaFacebook className='w-6 h-auto hover:text-blue-500' /></Link>
                    <Link><FaYoutube className='w-6 h-auto hover:text-red-600' /></Link>
                    <Link><FaInstagram className='w-6 h-auto hover:text-orange-500' /></Link>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;