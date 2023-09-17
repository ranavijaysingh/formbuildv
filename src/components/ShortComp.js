import React, { useEffect, useState } from 'react'
import '../styles/short.css';
export default function ShortComp({comp, setComp, nofield}) {
  const [question, setQuestion] = useState('')

  const handleChange = (e) => {
    setQuestion(e.target.value)   
  }

  useEffect(() =>{
    let cp = comp
    let newcp={"question":question, "ans": ""}
    cp[nofield] = {...cp[nofield], ...newcp};
    setComp(cp);
 
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
