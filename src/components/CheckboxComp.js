import React, { useEffect, useState } from 'react'

export default function CheckboxComp({comp, setComp, id}) {
  const [question, setQuestion] = useState('');
  const [inputValues, setInputValues] = useState(['']);

  const handleInputChange = (index, value) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);
  };

  const handleComponent = () => {
    const updatedComp = comp;
    const componentToUpdate = updatedComp.find((component) => component.id === id)
    componentToUpdate.question = question;
    componentToUpdate.inputValues = inputValues;
    setComp(updatedComp);
  }

  useEffect(() =>{
    handleComponent();
 },[question, inputValues])


  const addInput = (event) => {
    event.preventDefault();
    setInputValues([...inputValues, '']);
  };

  const removeInput = (event, index) => {
    event.preventDefault();
    const updatedValues = [...inputValues];
    updatedValues.splice(index, 1);
    setInputValues(updatedValues);
  };

  return (
    <div className='topShort'>
      <input 
        placeholder='Question' 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)}
      />
      <div>
        {inputValues.map((value, index) => (
          <div key={index} className="inputContainer">
            <span className="smallBox"></span>
            <input
              type="text"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="inputField"
            />
            <button onClick={(event) => removeInput(event, index)}>Remove</button>
          </div>
        ))}
        <button onClick={addInput}>Add Input</button>    
      </div>
    </div>
  )
}
