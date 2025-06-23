import React from 'react';
import Image from '../assets/logo.png'

const Logo = () => {
    return (
        <div className='flex items-end'>
            <img src={Image} className='h-7 w-5 lg:h-9 lg:w-7' alt="" />
            <p className='text-md lg:text-2xl  -ml-2 lg:-ml-3 -mb-1 font-bold'>Profast</p>
        </div>
    );
};

export default Logo;