import "./App.css";
import CalciDisplay from "./component/calciDisplay";
import CalciButtons from "./component/CalciButtons";
function App() {
  return (
    <div className="calculator">
      <CalciDisplay></CalciDisplay>
      <CalciButtons></CalciButtons>
    </div>
  );
}

export default App;
