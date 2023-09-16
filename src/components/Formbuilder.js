import React, { useState } from 'react'
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
        switch(component.type){
            case 'Short answer':
                return <ShortComp/>    
            case 'Long answer':
                return <LongComp/>
            case 'Multiple choice':
                return <MultipleComp/>
            case 'Checkbox':
                return <CheckboxComp/>
            case 'Dropdown':
                return <Dropdown/>
            default:
                return null   
        }

    }

    const onSelect = (el) => {
        const selectedType = el.target.value;
        setComp([...comp, {nofield:nofield, type:selectedType}])
        setNofield(nofield+1)
        el.target.value=""
    }

    const removeComp = (event,index) => {
        event.preventDefault();
        console.log(index)
        const updatedComp = [...comp];
        updatedComp.splice(index,1);
        setComp(updatedComp);
        console.log(comp)
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        let generateData = {};
        comp.forEach((compData) =>{
            generateData[compData.nofield] = compData
        })
        setFormData(generateData);
    }

  return (
    <div className='container'>
        <select onChange={onSelect} className='selectBox'>
            <option></option>
            <option>Short answer</option>
            <option>Long answer</option>
            <option>Checkbox</option>
            <option>Multiple choice</option>
            <option>Dropdown</option>
        </select>
        <form onSubmit={handleFormSubmit}>
            {comp.map((component, index) => {
                // earlier instead of using index, I was using key={component.nofield}
                 return (<div key={index}>
                    {renderComp(component)}
                    <button onClick={(event) =>removeComp(event, index)}>Remove</button>
                    {/* context se global state manage karlo useReducer -> stateManage */}
                </div>) 
            })}
            <button type="submit">Submit</button>
        </form>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
    </div>
  )
}
