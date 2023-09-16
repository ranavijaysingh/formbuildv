import React, { useEffect, useState } from 'react'
import '../styles/short.css';
export default function ShortComp({setContent, content, index}) {
  const [question, setQuestion] = useState('')

  const handleChange = (e) => {
    setQuestion(e.target.value)
    
  }

  useEffect(() =>{
    setContent({
      "question":question,
      "ans":''
    })
  },[question])

  return (
    <div className='topShort'>
      <input placeholder='Question' 
             value={question} 
             onChange={(e) => handleChange(e)}
             required
             name='question'
      />
      <input placeholder='Answer'
             readOnly
      />
    </div>
  )
}
