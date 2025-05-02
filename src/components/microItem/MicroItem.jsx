import "./microItem.css"
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/mainSlice";
import { removeFromCart } from "../../store/mainSlice";
const MicroItem = ({item}) => {
    const dispatch = useDispatch()
    return ( 
    <>
        <div className="microItem__wrapper">
            <img src={item.image} alt="small image of susha" className="microItemImage" />
            <div className="microItem__infoBlock">
                <div className="microItemTitle">{item.name}</div>
                <div className="microItemMacros">{item.macros}</div>
                <div className="microItem__priceBlock">
                    <div className="microItem__buttonBlock">
                        <div onClick={()=>dispatch(addToCart(item))} className="micro_button increment"><span className="inner_paragraf">+</span></div>
                        <div className="micro_button microItem__quantityBlock"><span className="inner_paragraf inner_paragraf_scaled">{item.quantity}</span></div>
                        <div onClick={()=>{
                            dispatch(removeFromCart(item))
                        }} className="micro_button decrement"><span className="inner_paragraf">-</span></div>
                    </div>
                    <div className="microItem__Price">{item.price*item.quantity}₽</div>
                </div>
            </div>
        </div>
    </>);
}
export default MicroItem;