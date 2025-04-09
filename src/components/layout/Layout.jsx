import Header from "../header/Header";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Item from "../item/Item";
import philadelfia from "./../../assets/images/philadelphia_1.png"
import { title } from "framer-motion/client";
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
    <Item item={item}></Item>
    <Outlet></Outlet>
    
    </>);
}
 
export default Layout;