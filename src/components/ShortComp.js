import React, { useEffect, useState } from 'react'
import '../styles/short.css';
export default function ShortComp({comp, setComp, id}) {
  const [question, setQuestion] = useState('')

  const handleChange = (e) => {
    setQuestion(e.target.value)   
  }

  useEffect(() =>{
    const updatedComp = comp;
    const componentToUpdate = updatedComp.find((component) => component.id === id)
    componentToUpdate.question = question;
    componentToUpdate.ans = "";
    setComp(updatedComp);     
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
