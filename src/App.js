import "./App.css";
import CalciDisplay from "./component/calciDisplay";
import CalciButtons from "./component/CalciButtons";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className="calculator">
      <CalciDisplay displayValue={calVal}></CalciDisplay>
      <CalciButtons onButtonClick={onButtonClick}></CalciButtons>
    </div>
  );
}

export default App;
