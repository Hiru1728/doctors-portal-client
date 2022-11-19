import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';
import Exceptional from './Exceptional';

const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Fluoride Treatment',
            description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae id eligendi necessitatibus qui totam veniam facere tempora nobis sapiente. Reprehenderit',
            img: fluoride,
        },
        {
            id: 2,
            name: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aperiam vero provident qui ducimus cumque debitis, aliquid similique odit eligendi!',
            img: cavity,
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptatem officiis velit nostrum vel natus eum illo blanditiis perferendis laboriosam.',
            img: whitening,
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='font-bold text-xl text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-[34px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div>
                <Exceptional></Exceptional>
            </div>
        </div>
    );
};

export default Services;