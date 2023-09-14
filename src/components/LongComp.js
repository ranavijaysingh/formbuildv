import React, { useState } from 'react'
import '../styles/Long.css';

export default function LongComp() {
  const [question, setQuestion] = useState('')
  return (
    <div className='qa'>
      <input 
        placeholder='Question' 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)}
        required
      />
      <textarea 
        placeholder='Answer'
        readOnly
      />
    </div>
  )
}
