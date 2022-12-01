import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/UseContext';

const Modal = ({ cars, setCars }) => {
    const { user } = useContext(AuthContext);
    const { title, resaleP } = cars;
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const title = form.title.value;
        const location = form.location.value;
        const booking = {
            title,
            name,
            email,
            phone,
            location
        }


        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    setCars(null);
                    toast.success('Booking confirme')
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="modal" className="modal-toggle" />
            <div className="modal bg-blue-50">
                <div className="modal-box relative">
                    <label htmlFor="modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className='py-4 font-bold text-2xl'>{title}</h2>
                    <h2 className=' font-bold text-xl text-black'>Price:  {resaleP}</h2>
                    <br />
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3'>
                        <label htmlFor="">Car Model</label>
                        <input name="title" type="text" defaultValue={title} disabled className="input input-bordered w-full" />
                        <label htmlFor="">Car Price</label>
                        <input name="price" type="number" defaultValue={resaleP} disabled className="input input-bordered w-full" />
                        <label htmlFor="">Your Name</label>
                        <input name="name" type="text" placeholder='Your Name' className="input input-bordered w-full" />
                        <label htmlFor="">Email address</label>
                        <input name="email" type="email" defaultValue={user?.email} disabled className="input input-bordered w-full" />
                        <label htmlFor="">Phone Number</label>
                        <input name="phone" type="number" placeholder="Phone Number" className="input input-bordered w-full" />
                        <label htmlFor="">Meeting location</label>
                        <input name="location" type="text" placeholder='Metting location' className="input input-bordered w-full" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;