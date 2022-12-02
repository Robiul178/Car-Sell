// import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../../componants/Context/UseContext';
import BookingTable from './BookingTable';

const MyBooking = () => {
    const { user } = useContext(AuthContext);

    const [bookings, setBookings] = useState({});
    console.log(bookings)
    useEffect(() => {
        fetch(`https://assignment12-server-robiul178.vercel.app/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])


    return (
        <div>
            <div>
                <h3 className='text-3xl mb-5'>My Appointment</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Model</th>
                                <th>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map(booking => <BookingTable
                                    booking={booking}
                                ></BookingTable>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    );
};

export default MyBooking;