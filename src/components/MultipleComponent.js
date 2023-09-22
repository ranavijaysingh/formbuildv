import React, { useState } from 'react'

export default function MultipleComponent({component}) {
  
  const {question, type, inputValues, _id} = component
  const [answer, setAnswer] = useState('')
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange= (e) =>{
    setSelectedOption(e.target.value)
    console.log(selectedOption)
  }

  return (
    <div>
      <label>{question}</label>
      {inputValues.map((option) =>{
        return(
        <div key={option}>
          <label>
            <input
              type='radio'
              value={option}
              checked= {selectedOption === option}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        </div>
        )
      })}
    </div>
  )
}
