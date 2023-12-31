import React, { useEffect, useState } from 'react'
export default function ShortComp({comp, setComp, id}) {
  const [question, setQuestion] = useState('')

  const handleChange = (e) => {
    setQuestion(e.target.value)   
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
