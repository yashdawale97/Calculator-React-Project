import style from "./calciDisplay.module.css";
function CalciDisplay({displayValue}){
    return <input className={style.display} type="text"  value={displayValue} readOnly />
}
export default CalciDisplay;