import React, { useState } from "react";
import "../styles/short.css";

export default function ShortComp({ updateState, questionDetails }) {
  const [newQuestion, setNewQuestion] = useState("");

  const onSubmit = () => {
    updateState([
      { type: "Short answer", questionName: newQuestion.questionName },
    ]);
  };

  const onInputChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setNewQuestion((prevState) => ({
      ...prevState,
      questionName: value,
    }));
  };

  return (
    <div className="topShort">
      <input
        placeholder="Question"
        value={questionDetails}
        onChange={onInputChange}
        required
      />
      <input placeholder="Answer" readOnly />
      <button onClick={onSubmit}>Add Component</button>
    </div>
  );
}
