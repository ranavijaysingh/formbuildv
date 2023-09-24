import React, { useState } from 'react'

export default function DropdownComponent({component}) {

  const {question, type, inputValues, _id } = component
  const [selectedOption, setSelectedOption] = useState(inputValues[0])

  const handleSelect = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
    <div>
      <div>
        <label>{question}</label>
      </div>
      <label>Select an option: </label>
      <select value={selectedOption} onChange={handleSelect}>
      {inputValues.map((option) =>{
        return (<option key={option} value={option}>
          {option}
        </option>)
      })}
      </select>
    </div>
  )
}
