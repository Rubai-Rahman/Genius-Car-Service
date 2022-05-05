import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('https://sleepy-earth-11471.herokuapp.com/services')
        .then(res=>res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div id='services'>
            <div className=" my-5">
            <h3 className='text-primary'>Our Services</h3>
        </div>
        <div className='services-container '>
            {
                services.map(service=><Service
                key={service._id}
                service={service}
                ></Service>)
            }
        </div>
        </div>
    );
};

export default Services;