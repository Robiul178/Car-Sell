import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/UseContext';

const Modal = (cars) => {
    const { user } = useContext(AuthContext);
    // const { title } = cars;
    console.log('form modal', cars)

    return (
        <div className='bg-red'>
            <input type="checkbox" id="modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {/* <h2>{title}</h2> */}
                    <form className='grid grid-cols-1 gap-3'>
                        <input type="text" disabled className="input input-bordered w-full" />
                        <input name="name" type="text" defaultValue={user?.displayName} placeholder="Your Name" className="input input-bordered w-full" />
                        <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full" />
                        <input name="phone" type="phone" placeholder="Phone Number" className="input input-bordered w-full" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;