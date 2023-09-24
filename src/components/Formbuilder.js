import React, { useEffect, useState } from 'react';
import ShortComp from './ShortComp';
import LongComp from './LongComp';
import MultipleComp from './MultipleComp';
import CheckboxComp from './CheckboxComp';
import Dropdown from './DropdownComp';
import '../styles/FormStyle.css';
import { NavLink } from 'react-router-dom';

export default function Formbuilder() {

  const [formId, setFormId] = useState();
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
        return <LongComp 
          comp={comp}
          setComp={setComp}
          id={id}
        />;
      case 'Multiple choice':
        return <MultipleComp 
          comp={comp}
          setComp={setComp}
          id={id}
        />;
      case 'Checkbox':
        return <CheckboxComp 
          comp={comp}
          setComp={setComp}
          id={id}
        />;
      case 'Dropdown':
        return <Dropdown 
          comp={comp}
          setComp={setComp}
          id={id}  
        />;
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

  const copyComp = (event, id) => {
    event.preventDefault();

    const copy = comp.find((component) => component.id === id);
    copy.id = Date.now();
    let updatedComp = [...comp, copy]
    console.log(updatedComp)
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

  const sendFormDataToBackend = () => {
    fetch(`http://localhost:8000/createForm`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); 
      })
      .then((data) => {
        setFormId(data)
      })
      .catch((error) => {
        console.error('There was a problem sending the data:', error);
      });
  };

  useEffect(() => {
    if(Object.keys(formData).length>0)
      sendFormDataToBackend();
  },[formData])

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
            <button onClick={(event) => copyComp(event, component.id)}>CopyComp</button>
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
      <p>{formId}</p>
      <NavLink to={`/form/${formId}`}>
        form
      </NavLink>
    </div>
  );
}
