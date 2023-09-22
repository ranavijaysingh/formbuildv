import React, { useEffect, useState } from 'react'

export default function ShortComponent({component}) {
  
  const {type, question, ans} = component
  const [answer, setAnswer] = useState('');

  const handleChange = (e) => {
    setAnswer(e.target.value);
  }

  return (
    <div>
      <label>{question}</label>
        {component.type}
      <input 
        value={answer}
        onChange={(e) => handleChange(e)}
        name='answer'
        />
    </div>
  )
}
