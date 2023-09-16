import React, { useState } from 'react'
import '../styles/Long.css';

export default function LongComp({setContent}) {
  const [question, setQuestion] = useState('')

  const handleChange = (value) => {
    setQuestion(value)
    setContent({
      "question":question,
      "ans":''
    })
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
