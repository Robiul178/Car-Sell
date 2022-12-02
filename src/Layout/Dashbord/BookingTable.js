import React from 'react';

const BookingTable = ({ booking }) => {
    console.log('from booking', booking.title)
    return (
        <div>
            <table className='table w-full'>
                <thead>

                </thead>
                <tbody>
                    <th>{booking.name}</th>
                    <th>{booking.title}</th>
                    <th>{booking.location}</th>
                </tbody>
            </table>
        </div>
    );
};

export default BookingTable;