import React, { useState } from 'react'

export default function CheckboxComponent({component}) {

  const {question, type, inputValues, id} = component
  const inputValuesCreator = inputValues.map((checkbox) =>{
    return ({id:checkbox, label:checkbox, isChecked: false})
  })

  const [checkboxes, setCheckboxes] = useState(inputValuesCreator);

  const handleCheckboxChange = (id) => {
    const updatedCheckboxes = checkboxes.map((checkbox) =>
      checkbox.id === id ? { ...checkbox, isChecked: !checkbox.isChecked } : checkbox
    );
    setCheckboxes(updatedCheckboxes);
  };


  

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const selectedCheckboxes = checkboxes.filter((checkbox) => checkbox.isChecked);
  //   console.log('Selected checkboxes:', selectedCheckboxes);
  // };

  return (
    <div>
      <label>{question}</label>
      {checkboxes.map((checkbox) => (
        <label key={checkbox.id}>
          <input
            type="checkbox"
            id={checkbox.id}
            checked={checkbox.isChecked}
            onChange={() => handleCheckboxChange(checkbox.id)}
          />
          {checkbox.label}
        </label>
      ))}
    </div>
  )
}
