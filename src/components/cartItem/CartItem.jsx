import "./cartItem.css"
import trash from "./../../assets/png/trash.png"
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToCart } from "../../store/mainSlice";
import { removeFromCart } from "../../store/mainSlice";
import { totalRemoveFromCart } from "../../store/mainSlice";
const CartItem = (props) => {
    const dispatch = useDispatch()
    return ( 
        <div className="cartItem__wrapper">
            <div className="cartItem__left">
                <img src={props.item.image} alt="susha" className="cartItem__image" />
                <div className="cartItem__title__container">
                    <div className="cartItem__header">{props.item.name}</div>
                    <div className="cartItem__caption">{props.item.macros}</div>
                </div>
            </div>
            <div className="cartItem__flexContainer">
                <div className="cartItem__totalPrice">{props.item.price * props.item.quantity}
                <span style={{fontWeight:400, fontSize:"calc(var(--index)*0.93)", marginLeft:"1%"}}>₽</span>
                </div>
                    <div className="cartItem__buttonBlock">
                        <div className="cart__micro_button cart__increment"
                        onClick={()=>{
                            dispatch(addToCart(props.item))
                        }}
                        ><span className="cart__inner_paragraf">+</span></div>
                        <div className="cart__micro_button cartItem__quantityBlock"><span className="cart__inner_paragraf cart__inner_paragraf_scaled">{props.item.quantity}</span></div>
                        <div className="cart__micro_button cart__decrement"
                            onClick={()=>{
                                dispatch(removeFromCart(props.item))
                            }}
                        ><span className="cart__inner_paragraf">-</span></div>
                    </div>
                    <img src={trash} alt="delete button" className="cartItem__delete__button" 
                    onClick={()=>{
                        dispatch(totalRemoveFromCart(props.item))
                    }}
                    />
            </div>
        </div>
    );
}
export default CartItem;