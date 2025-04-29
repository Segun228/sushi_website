import Header from "../header/Header";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Item from "../item/Item";
import philadelfia from "./../../assets/images/philadelphia_1.png"
import SumItem from "../sumItem/SumItem";
import CartItem from "../cartItem/CartItem";
import Footer from "../footer/Footer";
import RegisterForm from "../registerForm/RegisterForm";
import LogInForm from "../logInForm/LogInForm";

const item ={
    id:1,
    image:philadelfia,
    title:"Филадельфия ролл",
    price:300,
    macros:"205 г / 6 шт / 120 ккал ",
}
const Layout = () => {
    return ( 
    <>
    <Header></Header>
    <CartItem item={item}></CartItem>
    <Item item={item}></Item>
    <SumItem item={item}></SumItem>
    <RegisterForm></RegisterForm>
    <LogInForm></LogInForm>
    <Outlet item={item}></Outlet>
    <Footer></Footer>
    </>);
}
 
export default Layout;