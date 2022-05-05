import React from 'react';
import './AddService.css'
import { useForm } from "react-hook-form";
import axios from 'axios';

const Addservice = () => {
    const { register, handleSubmit,reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://sleepy-earth-11471.herokuapp.com//services',data)
        .then(res =>{
            if(res.data.insertedId){
                alert('added successfully');
                reset ();
            }
        })
        
    }
    return (
        <div className='add-service form'>
            <h2>Please Add A service </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })}placeholder='Name' />
                <textarea {...register("description", )} placeholder='Description'/>
                <input type="number" {...register("price")} placeholder='Price'/>
                <input {...register("img", )} placeholder='image URL'/>

                <input type="submit" />
            </form>

        </div>
    );
};

export default Addservice;