import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Modal from '../Modal/Modal';
import DisplayService from './DisplayService/DisplayService';
import './Service.css'

const Service = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
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
            <button onClick={() => filterResult('Bmw')} className='p-24 btn'>BMW</button>
            <button onClick={() => filterResult('Audi')} className='p-24 btn'>AUDI</button>
            <button onClick={() => filterResult('Toyota')} className='p-24 btn'>TOYOTA</button>
            <div className='grid grid-cols-3 gap-4'>
                {
                    services.map(service => <DisplayService
                        service={service}
                        key={service.id}
                    ></DisplayService>)
                }
            </div>
            <Modal></Modal>
        </div>
    );
};

export default Service;