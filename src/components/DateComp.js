import React, { useEffect, useState } from 'react'
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

export default function DateComp({comp, setComp,id}) {
const [selectedDate, setSelectedDate] = useState(null);
const [question, setQuestion] = useState('');

    const handleDateChange = (moment) => {
        setSelectedDate(moment);
    };
    const handleComponent = () => {
        const updatedComp = comp;
        const componentToUpdate = updatedComp.find((component) => component.id === id)
        componentToUpdate.question = question;
        componentToUpdate.datetime = {};
        setComp(updatedComp);
    }
    
    useEffect(() =>{
        handleComponent();
    },[question])

    return (
        <div>
            <input 
                placeholder='Question' 
                value={question} 
                onChange={(e) => setQuestion(e.target.value)}
                required
            />
            <Datetime
            value={selectedDate}
            onChange={handleDateChange}
            inputProps={{ placeholder: 'Select Date and Time' }}
            />
        </div>
)}
