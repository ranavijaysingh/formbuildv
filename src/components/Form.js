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
    const [formId, setFormId] = useState(formid)
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isSubmit, setIsSubmit] = useState(false);

    const handleFormSubmit = (event) =>{
        event.preventDefault();
        setIsSubmit(true);
    }

    const getData = () =>{      
        fetch(`http://localhost:8000/forms/${formId}`)
            .then((response) => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json(); 
            })
            .then((responseData) => {
                setData(responseData);
                setLoading(false); 
            })
            .catch((error) => {
                console.error('There was a problem fetching the data:', error);
                setLoading(false); 
            });
    }
    useEffect(() =>{
        getData();
    },[data]) // formId can be used instead of data

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
                <form className="formcontainer"  onSubmit={handleFormSubmit}>
                    {data && data.form ?
                        (data.form.map((component) =>(
                            <div key={component._id} className='inputcontainerdiv'>
                                {renderComp(component)}
                            </div>))
                            )
                            : ''
                    }
                    {data && data.form && <button type='Submit'>Submit</button>}
                </form>
            </div>
            )}
            {isSubmit ? <p>Data Submitted</p>: ''}
        </div>
    )
}
