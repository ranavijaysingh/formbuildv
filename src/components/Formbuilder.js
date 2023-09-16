import React, { useState } from "react";
import ShortComp from "./ShortComp";
import LongComp from "./LongComp";
import MultipleComp from "./MultipleComp";
import CheckboxComp from "./CheckboxComp";
import Dropdown from "./DropdownComp";
import "../styles/FormStyle.css";

export default function Formbuilder() {
  let [comp, setComp] = useState([]);
  const [formData, setFormData] = useState([]);
  const [chooseComponent, setChooseComponent] = useState("");

  const renderComp = (component, questionName) => {
    switch (component) {
      case "Short answer":
        return (
          <ShortComp updateState={updateState} questionDetails={questionName} />
        );
      case "Long answer":
        return <LongComp />;
      case "Multiple choice":
        return <MultipleComp />;
      case "Checkbox":
        return <CheckboxComp />;
      case "Dropdown":
        return <Dropdown />;
      default:
        return null;
    }
  };

  const updateState = (newData) => {
    setFormData((prevData) => [...prevData, ...newData]);
    setChooseComponent("");
    console.log(formData);
  };

  const onSelect = (e) => {
    const selectedType = e.target.value;
    setChooseComponent(selectedType);
    e.target.value = "";
  };

  const removeComp = (event, index) => {
    event.preventDefault();
    console.log(index);
    const updatedComp = [...comp];
    updatedComp.splice(index, 1);
    setComp(updatedComp);
    console.log(comp);
  };

  const printFormData = () => {
    console.log("formData", formData);
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
      <div>
        {chooseComponent && (
          <>
            <h2>Configure Form</h2>
            {renderComp(chooseComponent)}
          </>
        )}
      </div>
      <form>
        {formData &&
          formData.map((component, index) => {
            return (
              <div key={index}>
                {renderComp(component.type, component.questionName)}
                <button onClick={(event) => removeComp(event, index)}>
                  Remove
                </button>
              </div>
            );
          })}
      </form>

      <button onClick={printFormData}>SHow State</button>
    </div>
  );
}
