import React, { useState, useRef, useEffect } from 'react';

function Form() {
  let [controlledInput, setControlledInput] = useState('');
  let controlledInputRef = useRef(null);
  let unControlledInputRef = useRef(null);

  // Form validation
  let validateForm = () => {
    if (!controlledInput) {
      alert('Controlled input is required');
      return false;
    }
    if (!unControlledInputRef.current.value) {
      alert('Uncontrolled input is required');
      return false;
    }
    return true;
  };

  // Form submission
  let handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(controlledInput);
      console.log(unControlledInputRef.current.value);
    }
  };

  useEffect(() => {
    controlledInputRef.current.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="controlledInput">Controlled Input:</label> &nbsp;
        <input
          type="text"
          id="controlledInput"
          value={controlledInput}
          ref={controlledInputRef}
          onChange={(e) => setControlledInput(e.target.value)}
        />
      </div><br /><br />
      <div>
        <label htmlFor="uncontrolledInput">Uncontrolled Input: </label> &nbsp;
        <input
          type="text"
          id="uncontrolledInput"
          ref={unControlledInputRef}
        />
      </div><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
