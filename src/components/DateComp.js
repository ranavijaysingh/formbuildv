import React, { useState } from 'react'
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';



export default function DateComp() {

const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (moment) => {
        setSelectedDate(moment);
    };

    return (
        <div>
            <h2>Date and Time Saver</h2>
            <Datetime
            readOnly
            value={selectedDate}
            onChange={handleDateChange}
            inputProps={{ placeholder: 'Select Date and Time' }}
            />
            <div>
            <p>
                Selected Date and Time:{' '}
                {selectedDate ? selectedDate.format('MMMM Do YYYY, h:mm a') : 'Not selected'}
            </p>
            </div>
        </div>
)}
