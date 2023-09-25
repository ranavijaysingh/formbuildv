import React, { useState } from 'react'

export default function LongComponent({component}) {
  
  const {type, question, ans} = component
  const [answer, setAnswer] = useState('');

  const handleChange = (e) => {
    setAnswer(e.target.value);
  }

  return (
    <div>
      <div>
        <label>{question}</label>
      </div>
      <textarea 
        value={answer}
        onChange={(e) => handleChange(e)}
        name='answer'
        rows="4"
        cols="50"
        />
    </div>
  )
}
