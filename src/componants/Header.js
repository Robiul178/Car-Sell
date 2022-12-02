import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/UseContext';
import './CSS/Heade.css'
import { FiLogOut } from 'react-icons/fi';
// import { useState } from 'react';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    // const [cars, setCars] = useState([]);

    // useEffect(() => {
    //     fetch('https://assignment12-server-robiul178.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => {
    //             setCars(data)

    //         });
    // }, []);

    return (
        <div>
            <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={1} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a><Link className="btn btn-ghost normal-case text-xl" to="/">HOME</Link></a></li>
                                <li tabIndex={0}>
                                    <a>
                                        <Link className="btn btn-ghost normal-case text-xl" to="/services/:id">SERVICE</Link>
                                    </a>
                                </li>
                                <li><a><Link className="btn btn-ghost normal-case text-xl" to="/blog">BLOG</Link></a></li>
                            </ul>
                        </div>
                        <Link to='/' className="font-bold text-2xl">
                            <div>
                                <h1>CarCity</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><a><Link className="btn btn-ghost normal-case text-xl" to="/">HOME</Link></a></li>
                            <li tabIndex={2}>
                                <a>
                                    <Link className="btn btn-ghost normal-case text-xl" to="/services/:id">SERVICE</Link>
                                </a>
                            </li>
                            <li><a><Link className="btn btn-ghost normal-case text-xl" to="/blog">BLOG</Link></a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='user-info'>
                            {
                                user?.uid ?
                                    <div>
                                        <button><Link className="btn btn-ghost normal-case text-xl" to="/dashbord">Dashbord</Link></button>
                                        <button onClick={logOut} className="btn ml-2 btn-outline"><FiLogOut /></button>
                                    </div>
                                    :
                                    <>
                                        <Link className="btn btn-ghost normal-case text-xl" to="/login">Login</Link>
                                        <Link className="btn btn-ghost normal-case text-xl" to="/register">Register</Link>

                                    </>
                            }
                        </div>
                    </div>

                    <label tabIndex={1} htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Header;