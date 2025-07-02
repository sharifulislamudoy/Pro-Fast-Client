import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';
import { useForm } from 'react-hook-form';
import { useAuth } from '../Hooks/useAuth';

const Login = () => {
    const { googleLogin, signIn } = useAuth();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const handleSignIn = (data) => {
        const { email, password } = data;

        signIn(email, password)
            .then((result) => {
                console.log("Login successful:", result.user);
                reset();
                // Optionally navigate or show toast
            })
            .catch((error) => {
                console.error("Login failed:", error.message);
                // Optionally show error toast
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                console.log("Google Login Successful:", result.user);
                // Optionally: navigate('/dashboard');
            })
            .catch((error) => {
                console.error("Google Login Failed:", error.message);
            });
    };

    return (
        <div>
            {/* Heading */}
            <h2 className="text-3xl font-bold text-black mb-1">Welcome Back</h2>
            <p className="text-sm text-gray-500 mb-6">Login with Profast</p>

            {/* Form */}
            <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email", { required: true })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                    {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        placeholder="Password"
                        {...register("password", { required: true })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
                    />
                    {errors.password && <p className="text-red-500 text-sm">Password is required</p>}
                </div>

                <div className="text-right">
                    <a href="#" className="text-sm text-lime-500 hover:underline">Forget Password?</a>
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
                Don’t have any account? <Link to={'/auth/registration'} className="text-lime-500 font-medium">Register</Link>
            </p>

            <div className="flex items-center my-4">
                <hr className="flex-grow border-gray-300" />
                <span className="mx-2 text-gray-400 text-sm">Or</span>
                <hr className="flex-grow border-gray-300" />
            </div>

            {/* Google login */}
            <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-2 border border-gray-300 py-2 rounded-md hover:bg-gray-100"
            >
                <FcGoogle size={20} />
                <span className="text-sm font-medium">Login with Google</span>
            </button>
        </div>
    );
};

export default Login;
