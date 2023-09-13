import React, { useState } from 'react'

export default function CheckboxComp() {
  const [question, setQuestion] = useState('');
  const [cbNo, setCbNo] = useState(0);
  const [checkData, setCheckData] = useState([{id:'1',value:'yo'}])
  const [items, setItems] = useState([])
  const [inputValues, setInputValues] = useState(['']);

  const handleInputChange = (index, value) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);
  };

  const addInput = () => {
    setInputValues([...inputValues, '']); // Add an empty input value
  };

  const removeInput = (index) => {
    const updatedValues = [...inputValues];
    updatedValues.splice(index, 1); // Remove the input at the given index
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
      <input placeholder='No. of checkbox'
        value={cbNo}
        onChange={(e) => setCbNo(e.target.value)}
      />
      <div>
        {inputValues.map((value, index) => (
          <div key={index}>
            <input
              type="text"
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
            <button onClick={() => removeInput(index)}>Remove</button>
          </div>
        ))}
        <button onClick={addInput}>Add Input</button>
      </div>
    </div>
  )
}
