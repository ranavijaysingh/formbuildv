import React, { useEffect, useState } from 'react'
import '../styles/Long.css';

export default function LongComp({comp, setComp, id}) {
  const [question, setQuestion] = useState('')

  const handleChange = (value) => {
    setQuestion(value)    
  }

  const handleComponent = () => {
    const updatedComp = comp;
    const componentToUpdate = updatedComp.find((component) => component.id === id)
    componentToUpdate.question = question;
    componentToUpdate.ans = "";
    setComp(updatedComp);
  }

  useEffect(() =>{
    handleComponent();
 },[question])


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
