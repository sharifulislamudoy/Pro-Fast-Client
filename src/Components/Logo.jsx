import React from 'react';
import Image from '../assets/logo.png'

const Logo = () => {
    return (
        <div className='flex items-end'>
            <img src={Image} className='h-9 w-7' alt="" />
            <p className='text-2xl -ml-3 -mb-1 font-bold'>Profast</p>
        </div>
    );
};

export default Logo;