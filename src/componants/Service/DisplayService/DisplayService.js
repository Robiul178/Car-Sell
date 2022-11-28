import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayService.css'

const DisplayService = (props) => {

    const { image, title, id } = props.service;

    return (
        <div className='main-container mt-24'>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>

                        <div className="card-actions justify-end">
                            <div><Link to={`/seemore/${id}`}><button className='btn'>See More</button></Link> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayService;