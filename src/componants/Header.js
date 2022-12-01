import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/UseContext';
import './CSS/Heade.css'
import { FiLogOut } from 'react-icons/fi';
import { useState } from 'react';


const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const [cars, setCars] = useState([]);

    const filterResult = (catItem) => {
        alert('ok')
    }



    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setCars(data)

            });
    }, []);

    return (
        <div>
            {/* <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a><Link className="btn btn-ghost normal-case text-xl" to="/">HOME</Link></a></li>
                                <li tabIndex={0}>
                                    <a className="justify-between">
                                        <li><Link className="btn btn-ghost normal-case text-xl" to="/services/:id">SERVICES</Link></li>
                                    </a>
                                </li>
                                <li><a><Link className="btn btn-ghost normal-case text-xl" to="/blog">BLOG</Link></a></li>
                            </ul>
                        </div>
                        <Link to='/' className=" text-2xl">
                            <div>
                                <h1>HolidayEscape</h1>
                            </div>
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal p-0">
                            <li><a><Link className="btn btn-ghost normal-case text-xl" to="/">HOME</Link></a></li>
                            <li><a><Link className="btn btn-ghost normal-case text-xl" to="/services/:id">CARS</Link></a></li>
                            <li><a><Link className="btn btn-ghost normal-case text-xl" to="/blog">BLOG</Link></a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='user-info'>
                            {
                                user?.uid ?
                                    <div>
                                        <button className='btn'><Link to='/myreview'>My Review</Link> </button>
                                        <button className='btn'><Link to='/addservice'>Add service</Link> </button>
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
                </div>
            </div> */}


            <div>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li tabIndex={0}>
                                    <a className="justify-between">
                                        Parent
                                        <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                                    </a>
                                    <ul className="p-2">
                                        <li><a>Submenu 1</a></li>
                                        <li><a>Submenu 2</a></li>
                                    </ul>
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
                            <li tabIndex={0}>
                                <a>
                                    <Link className="btn btn-ghost normal-case text-xl" to="/services/:id">SERVICE</Link>
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2">
                                    <li><button className='btn btn-warning w-full' onClick={() => filterResult('Audi')}>AUDI</button></li>
                                </ul>
                            </li>
                            <li><a><Link className="btn btn-ghost normal-case text-xl" to="/blog">BLOG</Link></a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='user-info'>
                            {
                                user?.uid ?
                                    <div>
                                        <button className='btn'><Link to='/myreview'>My Review</Link> </button>
                                        <button className='btn'><Link to='/addservice'>Add service</Link> </button>
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
                </div>
            </div>
        </div>
    );
};

export default Header;