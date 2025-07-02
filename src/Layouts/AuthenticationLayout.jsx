import React from 'react';
import { Outlet } from 'react-router';
import AuthImage from '../assets/authImage.png';
import { FcGoogle } from 'react-icons/fc';
import Logo from '../Components/Logo';

const AuthenticationLayout = () => {
    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#F9FBF6] relative">

            {/* Left side - Form */}
            <div className="relative flex items-center justify-center px-6 py-12 bg-white">

                {/* Logo at top-left */}
                <div className="absolute top-6 left-6">
                    <Logo />
                </div>

                <div className="w-full max-w-md">
                    <Outlet />
                </div>
            </div>

            {/* Right side - Image */}
            <div className="hidden md:flex items-center justify-center p-6">
                <img
                    src={AuthImage}
                    alt="Delivery Illustration"
                    className="max-w-full h-auto"
                />
            </div>
        </div>
    );
};

export default AuthenticationLayout;
