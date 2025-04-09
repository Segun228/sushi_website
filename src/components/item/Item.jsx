import './item.css';

const Item = (props) => {
    return (
        <>
        <div className="item__wrapper">
          <img src={props.item.image} alt="roll" className="item__photo" />
          <div className="item__title">{props.item.title}</div>
          <div className="item__info">
            <div className="item__price">{props.item.price}₽</div>
            <div className="item__macros">{props.item.macros}</div>
          </div>
          <button className="buy__button">В корзину</button>
        </div>
        </>
      );
}
 
export default Item;