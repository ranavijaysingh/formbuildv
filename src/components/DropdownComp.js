import React, { useEffect, useState } from 'react'

export default function DropdownComp({comp, setComp, id}) {
  const [question, setQuestion] = useState('');
  const [inputValues, setInputValues] = useState(['']);

  const handleInputChange = (index, value) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);
  };

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

  return (
    <div className='topShort'>
      <input 
        placeholder='Question' 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)}
      />
      <div>
        <ol>
        {inputValues.map((value, index) => (
          <li key={index} className="inputContainer">
            <input
              type="text"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="inputField"
            />
            <button onClick={(event) => removeInput(event, index)}>Remove</button>
          </li>
        ))}
        </ol>
        <button onClick={addInput}>Add Input</button>    
      </div>
    </div>
  )
}
