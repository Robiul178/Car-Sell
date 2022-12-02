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
        fetch('https://assignment12-server-robiul178.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);



    useEffect(() => {
        fetch('https://assignment12-server-robiul178.vercel.app/service')
            .then(res => res.json())
            .then(data => setAddServices(data))
    }, [])



    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default Home;