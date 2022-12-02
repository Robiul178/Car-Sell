import React from 'react';
import { Link } from 'react-router-dom';
import img1 from './toyota-avanza-img1.jpg';



const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img1} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary"> <Link to='/service'>Get Started</Link> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;