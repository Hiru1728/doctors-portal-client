import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState, useEffect } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import BookingModal from '../../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({ selectedDate }) => {
    // const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: () => fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            .then(res => res.json())
    });

    /* /v2/appointmentOptions */

    if (isLoading) {
        return <Loading></Loading>
    }

    // optional
    // const {data:appointmentOptions=[]}=useQuery({
    //     queryKey:['appointmentOptions'],
    //     queryFn: async ()=>{
    //         const res=await fetch('localhost:5000/appointmentOptions')
    //         const data=await res.json();
    //         return data;
    //     }
    // })

    // useEffect(() => {
    //     fetch('appointmentOptions.json')
    //         .then(res => res.json())
    //         .then(data => setAppointmentOptions(data))

    // }, [])
    return (
        <section className='my-16'>
            <p className="text-center text-secondary font-bold">Available Appointment on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;