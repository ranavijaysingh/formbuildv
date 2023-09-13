import React, { useState } from 'react'

export default function Formbuilder() {

    const [fid, setfid] = useState(0);
    let [comp, setComp] = useState([]); //array of all component
    

    const onSelect = (el) => {
        setComp([...comp, {id:fid+1, type:el.target.value}])
        setfid(fid+1)
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
    </div>
  )
}
