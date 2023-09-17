import React, { useState } from 'react'
import '../styles/Long.css';

export default function LongComp() {
  const [question, setQuestion] = useState('')

  const handleChange = (value) => {
    setQuestion(value)
    
  }


  return (
    <div className='qa topShort'>
      <input 
        placeholder='Question' 
        value={question} 
        required
        onChange={(e) => handleChange(e.target.value)}
        name='question'
      />
      <textarea 
        placeholder='Answer'
        readOnly
      />
    </div>
  )
}
