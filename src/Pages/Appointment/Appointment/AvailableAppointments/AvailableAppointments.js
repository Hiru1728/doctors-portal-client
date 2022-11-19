import { format } from 'date-fns';
import React, { useState } from 'react';

const AvailableAppointments = ({ selectedDate }) => {
    const [appointmentOptions, setAppointmentOptions] = useState([]);

    fetch('appointmentOptions.json')
        .then(res => res.json)
        .then(data => setAppointmentOptions(data))

    return (
        <section className='mt-16'>
            <p className="text-center text-secondary font-bold">Available Appointment on {format(selectedDate, 'PP')}</p>
            <div>
                {
                    // appointmentOptions.map()
                }
            </div>
        </section>
    );
};

export default AvailableAppointments;