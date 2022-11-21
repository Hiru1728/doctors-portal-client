import React from 'react';
import PrimaryButton from '../../../../components/PrimaryButton/PrimaryButton';

const AppointmentOption = ({ option, setTreatment }) => {
    const { name, slots } = option;
    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-center text-secondary font-bold">{name}</h2>
                <p>
                    {slots.length > 0 ? slots[0] : 'Try Another day'}
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <PrimaryButton><label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(option)} htmlFor="booking-modal">Book Appointment</label></PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;