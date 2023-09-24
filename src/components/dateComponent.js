import React, { useEffect, useState } from 'react'
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

export default function DateComponent({component}) {

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (moment) => {
        setSelectedDate(moment);
    };


    const {question} = component 
    return (
        <div>
            <div>
                <label>{question}</label>
            </div>
            <Datetime
            className='date'
            value={selectedDate}
            onChange={handleDateChange}
            inputProps={{ placeholder: 'Select Date and Time' }}
            timeFormat={false}
            />
        </div>
    )
}
