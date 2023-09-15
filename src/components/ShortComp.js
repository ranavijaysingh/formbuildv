import React, { useState } from 'react'
import '../styles/short.css';
export default function ShortComp() {
  const [question, setQuestion] = useState('')
  return (
    <div className='topShort'>
      <input placeholder='Question' 
             value={question} 
             onChange={(e) => setQuestion(e.target.value)}
             required
      />
      <input placeholder='Answer'
             readOnly
      />
    </div>
  )
}
