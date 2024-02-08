import style from "./CalciButtons.module.css";
function CalciButtons({onButtonClick}){
  const buttonLists = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

  return <div className={style.calciButtons}>
    {buttonLists.map((buttonlist) =>
      (<button className={style.button} onClick={()=>onButtonClick(buttonlist)}>{buttonlist}</button>))}
  </div>
  
}
export default CalciButtons;