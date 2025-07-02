import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const Registration = () => {
    return (
        <div>
            {/* Heading */}
            <h2 className="text-3xl font-bold text-black mb-1">Create an Account</h2>
            <p className="text-sm text-gray-500 mb-6">Register with Profast</p>

            {/* Form */}
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                        type="name"
                        placeholder="Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        placeholder="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-lime-400 hover:bg-lime-500 text-white font-semibold py-2 rounded-md"
                >
                    Continue
                </button>
            </form>

            {/* Register & OR */}
            <p className="text-sm text-center mt-4">
                Already have an account? <Link to={'/auth/login'} className="text-lime-500 font-medium">Login</Link>
            </p>

            <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-2 text-gray-400 text-sm">Or</span>
                <hr className="flex-grow border-gray-300" />
            </div>

            {/* Google login */}
            <button className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100">
                <FcGoogle size={20} />
                <span className="text-sm font-medium">Register with Google</span>
            </button>
        </div>
    );
};

export default Registration;