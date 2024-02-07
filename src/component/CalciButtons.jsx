import SingleButton from "./SingleButton";
import style from "./CalciButtons.module.css";
function CalciButtons(){
    return(<div className={style.calciButtons}>
    <SingleButton></SingleButton>
  </div>)
}
export default CalciButtons;