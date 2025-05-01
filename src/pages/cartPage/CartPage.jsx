import CartItem from "../../components/cartItem/CartItem";
import useScrollToTop from "../../helpers/useScrollToTop";
import "./cartPage.css"
const CartPage = () => {
    useScrollToTop()
    return (<>
    <div className="cartPage__wrapper">
        Cart
    </div>
    </>);
}

export default CartPage;