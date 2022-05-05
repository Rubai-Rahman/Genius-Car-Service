import React from 'react';
import Expert from '../Expert/Expert';






const experts = [
    {
        img:'https://i.ibb.co/0j0gk7d/2.jpg',
        name:'Andrew Smith',
        expertize: '-Engine Expert-'
    },
    {
        img:'https://i.ibb.co/Ksmp1Mn/Basic-of-Car-Mechanic1.jpg',
        name:'John Anderson',
        expertize: '-Polish Expert-'
    },
    {
        img:'https://i.ibb.co/09gdJDd/car-mechanic-fixing-wheels.jpg',
        name:'Warner Smith',
        expertize: '-Coloring Expert-'
    },
    {
        img:'https://i.ibb.co/bFsnstG/Car-Repair.webp',
        name:'Mathew Wade',
        expertize: '-Wheel Expert-'
    },
    {
        img:'https://i.ibb.co/3B2Z36V/Mechanic.jpg',
        name:'Lipu Lamber',
        expertize: '-Build Expert-'
    }
]



const Experts = () => {
    return (
        <>
        <div className='container my-5' id='experts'>
            <h2 className='text-primary'> Our Experts</h2>
            <div className="row">
            {
                experts.map(expert =><Expert
                key={expert.name}
                expert={expert}
                ></Expert>)
            }
        </div>
        </div>
        
        </>
    );
};

export default Experts;