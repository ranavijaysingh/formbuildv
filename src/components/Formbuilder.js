import React, { useState } from 'react'
import ShortComp from './ShortComp';
import LongComp from './LongComp';
import MultipleComp from './MultipleComp';
import CheckboxComp from './CheckboxComp';
import Dropdown from './DropdownComp';
import '../styles/FormStyle.css';
export default function Formbuilder() {

    const [nofield, setNofield] = useState(0);
    let [comp, setComp] = useState([]); 
    

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
        <form>
            {comp.map((component) => {
                 return (<div key={component.nofield}>
                    {renderComp(component)}
                </div>)
                
            })}
        </form>
    </div>
  )
}
