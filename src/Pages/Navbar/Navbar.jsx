import React from 'react';
import { FaGithub, FaSearch } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-slate-600 text-white">
        <div className="flex-1">
            <h2 className='text-2xl font-bold tracking-wide'>Find Verse</h2>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 flex justify-center items-center">
                 <li>
                    <details>
                    <summary>
                        Menu
                    </summary>
                    <ul className="p-2 bg-slate-700 rounded-t-none space-y-2">
                        <li>
                            <NavLink to="/documentation">
                                Documentation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/feedback">
                                Feedback
                            </NavLink>
                        </li>
                    </ul>
                    </details>
                </li>
                <li className='text-2xl'>
                    <NavLink to="https://github.com/mehedi-murad">
                        <FaGithub />
                    </NavLink>
                </li>
                
            </ul>
        </div>
        </div>
    );
};

export default Navbar;