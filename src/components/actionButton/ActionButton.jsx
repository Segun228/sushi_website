import classes from "./actionButton.module.css"
const ActionButton = (props) => {
    return ( 
        <button onClick={props.onClick} className={classes.buy__button}>{props.message}</button>
    );
}
export default ActionButton;