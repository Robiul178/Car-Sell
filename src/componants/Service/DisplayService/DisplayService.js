import React from 'react';
// import { Link } from 'react-router-dom';
import './DisplayService.css'

const DisplayService = ({ service, setCars }) => {

    const { image, title, resaleP, originalP, location } = service;

    return (
        <div className='main-container mt-24'>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <h2 className="text-lg"><span className='font-bold'>Location:</span>  {location}</h2>
                        <h2 className="text-lg"><span className='font-bold'>Original Price:</span>  {originalP}</h2>
                        <h2 className="text-lg"><span className='font-bold'>Resale Price:</span>  {resaleP}</h2>
                        <div className="card-actions justify-end">
                            <label
                                htmlFor="modal" className="btn"
                                onClick={() => setCars(service)}
                            >Book Now</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayService;