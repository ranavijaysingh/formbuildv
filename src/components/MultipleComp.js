import React, { useState } from 'react'
import '../styles/Multiple.css';

export default function MultipleComp() {
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

  return (
    <div className='topShort'>
      <input 
        placeholder='Question' 
        value={question} 
        onChange={(e) => setQuestion(e.target.value)}
        required
      />
      <div>
        {inputValues.map((value, index) => (
          <div key={index} className="inputContainer">
            <span className="smallBoxMulti"></span>
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
    </div>)
}
