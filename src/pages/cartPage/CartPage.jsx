import ActionButton from "../../components/actionButton/ActionButton";
import CartItem from "../../components/cartItem/CartItem";
import useScrollToTop from "../../helpers/useScrollToTop";
import styles from "./cartPage.module.css"
import { useSelector, useDispatch } from "react-redux";
import { uid } from "uid";
import image from "./../../assets/vectors/nosushi.svg"
import { Link } from "react-router-dom";
import Scroll from "../../components/scrollButton/Scroll";
const CartPage = () => {
    const dispatch = useDispatch()
    const cart = useSelector((store)=>store.main.cart)
    const total = useSelector((store)=>store.main.totalPrice)
    console.log(cart)
    useScrollToTop()
    return (<>
    <div className={styles.wrapper}>
        <div className={styles.title}>Корзина</div>
        <div className={styles.container}>
            <>
                {cart.map((item)=>{
                    return(
                        <CartItem key={uid()} item={item}></CartItem>
                    )
                })}
                {(total!==0)&&
                <>
                    <div className={styles.total_container}>Итого: 
                        <span style={{fontFamily:"Roboto", fontSize:"calc(var(--index)*1.6)"}}> {total}</span>
                        <span style={{fontWeight:400, fontSize:"calc(var(--index)*0.93)", marginLeft:"0.3%"}}>₽</span>
                    </div>
                    <span className={styles.but}><ActionButton  message="Оформить"></ActionButton></span>
                </>
                }
                {(total===0)&&
                <>
                    <img src={image} alt="sun" className={styles.no_sushi} />
                    <div className={styles.total_container}>В корзине пока ничего нет</div>
                    <span className={styles.but}><Link to="/catalogue"><ActionButton  message="Добавить"></ActionButton></Link></span>
                </>
                }
                
            </>
        </div>
    </div>
    </>);
}

export default CartPage;