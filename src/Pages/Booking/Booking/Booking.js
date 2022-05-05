import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Booking = () => {
    const {serviceID} =useParams();
    const [service,setService] =useState({});
    useEffect(() =>{
        fetch(`https://sleepy-earth-11471.herokuapp.com//services/${serviceID}`)
        .then(res =>res.json())
        .then(data =>{
            setService(data)
            console.log(data)
        });
        
      
    },[])
    return (
        <div>
            <h2>Details of : {service.name}</h2>
            <h3>This is Booking: {serviceID}</h3>
        </div>
    );
};

export default Booking;