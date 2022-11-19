import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const Submit = () => {
    return (
        <section
            style={{ background: `url(${appointment})` }}
        >
            <div>
                <div className='text-center mb-4'>
                    <h5 className="text-2xl font-bold text-primary">Contact Us</h5>
                    <h2 className='text-5xl text-white'>Stay connected with us</h2>
                </div>
                <div>
                    <div className="hero ">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email Address</span>
                                    </label>
                                    <input type="text" placeholder="Email Address" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Subject</span>
                                    </label>
                                    <input type="text" placeholder="Subject" className="input input-bordered" />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your message</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered" placeholder="Your message"></textarea>

                                </div>
                                <div className="form-control mt-6 text-center">
                                    <PrimaryButton>Submit</PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Submit;