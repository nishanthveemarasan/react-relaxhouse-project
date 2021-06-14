import { useState } from "react";
const useInut = (value) => {
  const [enteredInput, setEnteredInput] = useState(value);

  const onInputChangeHandler = (event) => {
    //  alert(event.target.value);
    setEnteredInput(event.target.value);
  };

  return {
    enteredInput,
    setEnteredInput,
    onInputChangeHandler,
  };
};

export default useInut;
