import React, { useState } from 'react';
import ShortComp from './ShortComp';
import LongComp from './LongComp';
import MultipleComp from './MultipleComp';
import CheckboxComp from './CheckboxComp';
import Dropdown from './DropdownComp';
import '../styles/FormStyle.css';

export default function Formbuilder() {
  const [nofield, setNofield] = useState(0);
  const [comp, setComp] = useState([]);
  const [formData, setFormData] = useState({});

  const renderComp = (component, index) => {
    switch (component.type) {
      case 'Short answer':
        return (
          <ShortComp
            key={component.id} // Use a unique identifier (id) as the key
            comp={comp}
            setComp={setComp}
            nofield={component.nofield}
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
    setComp([...comp, { nofield, type: selectedType, id: Date.now() }]); // Assign a unique id
    setNofield(nofield + 1);
    el.target.value = '';
  };

  const removeComp = (event, id) => {
    event.preventDefault();
    const updatedComp = comp.filter((component) => component.id !== id);
    setComp(updatedComp);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let generateData = {};
    comp.forEach((compData) => {
      generateData[compData.nofield] = { ...compData };
    });
    setFormData(generateData);
  };

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
            {renderComp(component)}
            <button onClick={(event) => removeComp(event, component.id)}>Remove</button>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  );
}
