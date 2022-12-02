import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Modal from '../Modal/Modal';
import DisplayService from './DisplayService/DisplayService';
import './Service.css'

const Service = () => {
    const [services, setServices] = useState([]);
    const [cars, setCars] = useState(null);

    useEffect(() => {
        fetch('/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
            });
    }, []);

    const filterResult = (catItem) => {
        const result = services.filter((curData) => {
            return curData.category === catItem;
        });
        setServices(result)

    }

    return (
        <div>
            <button onClick={() => filterResult('Bmw')} className='p-6 m-2 btn'>BMW</button>
            <button onClick={() => filterResult('Audi')} className='p-6 m-2 btn'>AUDI</button>
            <button onClick={() => filterResult('Toyota')} className='p-6 m-2 btn'>TOYOTA</button>
            <div className='grid grid-cols-3 gap-4'>
                {
                    services.map(service => <DisplayService
                        service={service}
                        key={service.id}
                        setCars={setCars}
                    ></DisplayService>)
                }
            </div>
            {
                cars &&
                <Modal
                    cars={cars}
                    setCars={setCars}
                ></Modal>
            }
        </div>
    );
};

export default Service;