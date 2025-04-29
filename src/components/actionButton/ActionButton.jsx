import classes from "./actionButton.module.css"
const ActionButton = (props) => {
    return ( 
        <button className={classes.buy__button}>{props.message}</button>
    );
}
export default ActionButton;