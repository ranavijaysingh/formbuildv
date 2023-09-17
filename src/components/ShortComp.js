import React, { useEffect, useState } from 'react'
import '../styles/short.css';
export default function ShortComp({comp, setComp, id}) {
  const [question, setQuestion] = useState('')

  const handleChange = (e) => {
    setQuestion(e.target.value)   
  }

  useEffect(() =>{
    let cp = comp
    let newcp={"question":question, "ans": ""}
    cp[id] = {...cp[id], ...newcp};
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
