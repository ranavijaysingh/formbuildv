import React, { useState } from 'react'
import Checkbox from '../styles/Checkbox.css';

export default function CheckboxComp() {
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

  const removeInput = (index) => {
    const updatedValues = [...inputValues];
    updatedValues.splice(index, 1);
    setInputValues(updatedValues);
  };

  return (
    <div>
      <input 
        placeholder='Question' 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)}
        required
      />
      <div>
        {inputValues.map((value, index) => (
          <div key={index} className="inputContainer">
            <span class="smallBox"></span>
            <input
              type="text"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              className="inputField"
            />
            <button onClick={() => removeInput(index)}>Remove</button>
          </div>
        ))}
        <button onClick={addInput}>Add Input</button>    
      </div>
    </div>
  )
}
