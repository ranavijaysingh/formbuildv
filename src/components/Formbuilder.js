import React, { useState } from 'react';
import ShortComp from './ShortComp';
import LongComp from './LongComp';
import MultipleComp from './MultipleComp';
import CheckboxComp from './CheckboxComp';
import Dropdown from './DropdownComp';
import '../styles/FormStyle.css';
export default function Formbuilder() {

  const [comp, setComp] = useState([]); 
  const [formData, setFormData] = useState({});
  const renderComp = (component, id) => { 
    switch (component.type) {
      case 'Short answer':
        return (
          <ShortComp
            comp={comp}
            setComp={setComp}
            id={id}
          />
        );
      case 'Long answer':
        return <LongComp key={component.id} />;
      case 'Multiple choice':
        return <MultipleComp key={component.id} />;
      case 'Checkbox':
        return <CheckboxComp key={component.id} />;
      case 'Dropdown':
        return <Dropdown key={component.id} />;
      default:
        return null;
    }
  };

  const onSelect = (el) => {
    const selectedType = el.target.value;
    setComp([...comp, { id: Date.now(), type: selectedType }]); // Assign a unique id
    el.target.value = '';
  };

  const removeComp = (event, id) => {
    event.preventDefault();
    const updatedComp = comp.filter((component) => component.id !== id);
    setComp(updatedComp);
  };


    const handleFormSubmit = (event) =>{
        event.preventDefault();
        let generateData = {};
        comp.forEach((compData) =>{

            generateData[compData.id] = { ...compData}
        })
        setFormData(generateData);
    }


  return (
        <div className="container">
      <select onChange={onSelect} className="selectBox">
        <option></option>
        <option>Short answer</option>
        <option>Long answer</option>
        <option>Checkbox</option>
        <option>Multiple choice</option>
        <option>Dropdown</option>
      </select>
      <form onSubmit={handleFormSubmit}>
        {comp.map((component) => (
          <div key={component.id}>
            {renderComp(component, component.id)}
            <button onClick={(event) => removeComp(event, component.id)}>Remove</button>
          </div>
          // context se global state manage karlo useReducer -> stateManage 
        ))}
        <button type="submit">Submit</button>
      </form>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}
