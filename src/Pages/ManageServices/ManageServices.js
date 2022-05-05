import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services,setServices] = useState([]);
    useEffect(() =>{
        fetch('https://sleepy-earth-11471.herokuapp.com//services')
        .then(res=>res.json())
        .then(data =>setServices(data))

    },[])
    const handleDelete = id =>{
        const url = `https://sleepy-earth-11471.herokuapp.com//services/${id}`;
        fetch(url,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount){
                alert('deleted')
                const remaining = services.filter(service =>service._id !==id);
                setServices(remaining);
            }
        })
    }

    return (
        <div>
            <h3>Manage services</h3>
            {
                services.map(service =><div key={service._id}>
                    <h3>{service.name}</h3>
                    <button onClick={()=>handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;