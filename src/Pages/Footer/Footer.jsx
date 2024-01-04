import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-slate-600'>
            <p className='text-center font-bold'>Made by 
                <span className='ml-2 text-gray-500 underline'>
                    <Link to="https://my-portfolio-a5490.web.app/">
                        Mehedi Hasan
                    </Link>
                </span>
            </p>

        </div>
    );
};

export default Footer;