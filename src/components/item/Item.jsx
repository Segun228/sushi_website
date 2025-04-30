import './item.css';
import ActionButton from '../actionButton/ActionButton';
const Item = (props) => {
    return (
        <div className="item__wrapper">
          <img src={props.item.image} alt="roll" className="item__photo" />
          <div className="item__title">{props.item.name}</div>
          <div className="item__info">
            <div className="item__price">{props.item.price}<span style={{fontWeight:400, fontSize:"calc(var(--index)*0.93)", marginLeft:"3.5%"}}>₽</span></div>
            <div className="item__macros">{props.item.macros}</div>
          </div>
          <ActionButton message="В корзину"></ActionButton>
        </div>
      );
}
 
export default Item;