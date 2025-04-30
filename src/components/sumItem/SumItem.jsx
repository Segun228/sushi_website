import ActionButton from "../actionButton/ActionButton";
import MicroItem from "../microItem/MicroItem";
import philadelfia from "./../../assets/images/philadelphia_1.png"
import "./sumItem.css"


const item ={
    id:1,
    image:philadelfia,
    title:"Филадельфия ролл",
    price:300,
    macros:"205 г / 6 шт / 120 ккал ",
}


const SumItem = () => {
    return ( 
    <div className="sumItem__wrapper">
        <div className="sumItem__title">Ваш заказ</div>
        <div className="sumItem__container">
            <MicroItem item={item} ></MicroItem>
            <MicroItem item={item} ></MicroItem>
            <MicroItem item={item} ></MicroItem>
            <MicroItem item={item} ></MicroItem>
            <MicroItem item={item} ></MicroItem>
            <MicroItem item={item} ></MicroItem>
            <MicroItem item={item} ></MicroItem>
            <MicroItem item={item} ></MicroItem>
            <MicroItem item={item} ></MicroItem>
        </div>
        <div className="sumItem__totalPrice"></div>
        <div className="sumItem__caption"></div>
        <ActionButton message="Оформить"></ActionButton>
    </div>
    );
}
export default SumItem;