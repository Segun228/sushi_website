import { Link } from "react-router-dom";
import ActionButton from "../actionButton/ActionButton";
import MicroItem from "../microItem/MicroItem";
import philadelfia from "./../../assets/images/philadelphia_1.png"
import "./sumItem.css"
import { useSelector } from "react-redux";
import { uid } from "uid";
import fish from "./../../assets/vectors/fish.svg";

const SumItem = () => {
    let cart = useSelector(store => store.main.cart)
    let totalPrice = useSelector(store => store.main.totalPrice)
    return ( 
    <div className="sumItem__wrapper">
        <div className="sumItem__title">Ваш заказ</div>
        {(totalPrice!==0)&&
        <div className="meta_cont">
            <div className="sumItem__container">
                {cart.map((item)=>{
                    return(
                        <MicroItem key={uid()} item={item}></MicroItem>
                    )
                })}
            </div>
            <div className="total sumItem__title">Итого: <span style={{fontFamily:"Roboto", fontSize:"calc(1.5*var(--index))"}}>{totalPrice}</span><span style={{fontWeight:400, fontSize:"calc(var(--index)*0.93)", marginLeft:"1%"}}>₽</span></div>
            <Link to="/cart"><ActionButton message="Оформить"></ActionButton></Link>
        </div>}
        {(totalPrice===0)&&
        <>
            <img src={fish} alt="koi fish" className="koi_fish"/>
            <div className="sumItem__title sumItem__lower__title">Пока тут пусто</div>
        </>  
        }
    </div>
    );
}
export default SumItem;