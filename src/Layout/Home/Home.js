import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
// import DisplayAddedService from '../../componants/Service/AddService/DisplayAddedService';
import Banner from '../Banner/Banner';
import About from './About/About';

const Home = () => {
    const [services, setServices] = useState([]);

    const [addServices, setAddServices] = useState([]);
    // console.log(addServices)

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);



    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setAddServices(data))
    }, [])



    return (
        <div>
            <Helmet>
                <title>HolidayEscape-Home</title>
            </Helmet>
            <div>
                <Banner></Banner>
            </div>
            {/* <div>
                <div className='grid grid-cols-3 gap-4'>
                    {
                        addServices.map(addService => <DisplayAddedService
                            addService={addService}
                        ></DisplayAddedService>)
                    }
                </div>
                <Link className="btn btn-ghost pt-2 normal-case text-xl" to="/services/:id">See More</Link>
            </div> */}
            <div>
                <About></About>
            </div>
        </div>
    );
};

export default Home;