import React, { useState } from 'react'
import ShortComp from './ShortComp';
import LongComp from './LongComp';
import MultipleComp from './MultipleComp';
import CheckboxComp from './CheckboxComp';
import Dropdown from './DropdownComp';

export default function Formbuilder() {

    const [nofield, setNofield] = useState(0);
    let [comp, setComp] = useState([]); //array of all component
    

    const renderComp = (component) => {
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
                return <Dropdown />
            default:
                return <ShortComp />
                
        }

    }

    const onSelect = (el) => {
        setComp([...comp, {nofield:nofield+1, type:el.target.value}])
        setNofield(nofield+1)
        console.log(comp)
    }


  return (
    <div>
        <select onChange={onSelect}>
            <option>Short answer</option>
            <option>Long answer</option>
            <option>Checkbox</option>
            <option>Multiple choice</option>
            <option>Dropdown</option>
        </select>
        <form>
            {comp.map((component) => {
                return( <div key={component.nofield}>
                    {renderComp(component)}
                </div>
                )
            })}
        </form>
    </div>
  )
}
