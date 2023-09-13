import React, { useState } from 'react'

export default function ShortComp() {
  const [question, setQuestion] = useState('')
  return (
    <div>
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
