import React, { useEffect, useState } from 'react'

export default function Form() {
    const [formId, setFormId] = useState('650cb712b587093104c5504e')
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [formData, setFormData] = useState({
        textInput:"",
        dropdown:"",
        multipleChoice: ""
    });


    const handleInputChange = (event) => {
        // const { name, value, type, checked } = event.target;

        // if (type === "checkbox") {
        //   setFormData((prevData) => ({
        //     ...prevData,
        //     checkboxes: {
        //       ...prevData.checkboxes,
        //       [name]: checked
        //     }
        //   }));
        // } else {
        //   setFormData((prevData) => ({
        //     ...prevData,
        //     [name]: value
        //   }));
        // }
        console.log("yo")
    }
    
    const getData = () =>{
        fetch(`http://localhost:8000/forms/${formId}`)
            .then((response) => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the response body as JSON
            })
            .then((responseData) => {
                setData(responseData); // Store the data in state
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

    
    
    return (
        <div>
            {loading ? (
            <p>Loading...</p>
            ) : (
            <div>
                <h1>Data Received:</h1>
                <pre>{JSON.stringify(data, null, 2)}</pre>
                <form>
                    {data.form.map((item) =>{
                        return (<div key={item._id}>
                            <label>{item.question}</label>
                            {item.type=== 'Short answer' && 
                            (<input type='text' value={formData.textInput} onChange={handleInputChange}/>)}
                            {item.type=== 'Long answer' && 
                            (<textarea type='text' value={item.ans} onChange={handleInputChange}/>)}
                            {item.type==='Checkbox' && (
                                <div>
                                    {item.inputValues.map((opt)=>{
                                        return(<label>
                                            <input 
                                                type='checkbox'
                                                checked='false'
                                                value='fsd'
                                                onChange={handleInputChange}
                                            />
                                            {opt}
                                        </label>)
                                    })}
                                </div>
                            )}

                            {item.type==='Dropdown' && (<select value={"sd"} onChange={handleInputChange}>
                                    <option value="">Select an option</option>
                                    {item.inputValues.map((opt)=>{
                                        return(
                                            <option value={opt}>{opt}</option>
                                        )
                                    })}
                                </select>
                            )}

                            {item.type==='Multiple choice' && (<div>
                                    {item.inputValues.map((opt)=>{
                                        return(<label>
                                            <input 
                                                type='radio'
                                                checked='false'
                                                value={opt}
                                                onChange={handleInputChange}
                                            />
                                            {opt}
                                        </label>)
                                    })}
                                </div>
                            )}
                        </div>)
                    })}
                    
                </form>
            </div>
        )}
        </div>
)}
