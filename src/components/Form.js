import React, { useEffect, useState } from 'react'
import DropdownComponent from './DropdownComponent'
import CheckboxComponent from './CheckboxComponent'
import ShortComponent from './ShortComponent'
import LongComponent from './LongComponent'
import { useParams } from 'react-router'
import MultipleComponent from './MultipleComponent'
import DateComponent from './dateComponent'


export default function Form() {

    const { formid } = useParams();
    const [formId, setFormId] = useState('650cb712b587093104c5504e')
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);


    const getData = () =>{      
        setFormId(formid);
        fetch(`http://localhost:8000/forms/${formId}`)
            .then((response) => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json(); 
            })
            .then((responseData) => {
                setData(responseData);
                setLoading(false); // Set loading to false
            })
            .catch((error) => {
                console.error('There was a problem fetching the data:', error);
                setLoading(false); // Set loading to false even on error
            });
    }
    useEffect(() =>{
        getData();
    },[data])

    const renderComp = (component) =>{
        switch(component.type) {
            case 'Inputbox':
                return (
                    <ShortComponent
                        component = {component}
                    />
                    );
            case 'Textbox':
                return (
                    <LongComponent
                        component = {component}
                    />
                );
            case 'Multiple choice':
                return (
                    <MultipleComponent
                        component = {component}
                    />
                );
            case 'Checkbox':
                return (
                    <CheckboxComponent
                        component = {component}
                    />
                );
            case 'Dropdown':
                return (
                    <DropdownComponent
                        component = {component}
                    />
                );
            case 'Date':
                return (
                    <DateComponent
                        component = {component}
                    />
                );
            default:
                return null;
        }
    }
    
    return (
        <div>
            {loading ? (
            <p>Loading...</p>
            ) : (
            <div>
                <form className="formcontainer">
                    {data.form.map((component) =>(
                        <div key={component._id} className='inputcontainerdiv'>
                            {renderComp(component)}
                        </div>
                    ))}
                    <button type='Submit'>Submit</button>
                </form>
            </div>
            )}
        </div>
    )
}
