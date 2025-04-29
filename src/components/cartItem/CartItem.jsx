import "./cartItem.css"
import trash from "./../../assets/png/trash.png"
const CartItem = (props) => {
    return ( 
        <div className="cartItem__wrapper">
            <img src={props.item.image} alt="susha" className="cartItem__image" />
            <div className="cartItem__title__container">
                <div className="cartItem__header">Филадельфия ролл</div>
                <div className="cartItem__caption">205 г / 6 шт / 120 ккал </div>
            </div>
            <div className="cartItem__flexContainer">
            <div className="cartItem__totalPrice">700$</div>
                <div className="cartItem__buttonBlock">
                    <div className="cart__micro_button cart__increment"><span className="cart__inner_paragraf">+</span></div>
                    <div className="cart__micro_button cartItem__quantityBlock"><span className="cart__inner_paragraf cart__inner_paragraf_scaled">2</span></div>
                    <div className="cart__micro_button cart__decrement"><span className="cart__inner_paragraf">-</span></div>
                </div>
                <img src={trash} alt="delete button" className="cartItem__delete__button" />
            </div>
        </div>
    );
}
export default CartItem;