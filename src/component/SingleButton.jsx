import style from "./SingleButton.module.css";
function SingleButton(){
    const buttonLists =['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
    return  buttonLists.map(buttonlist => <button className={style.button}>{buttonlist}</button>)
}
export default SingleButton;