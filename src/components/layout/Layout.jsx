import Header from "../header/Header";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";



const Layout = () => {
    return ( 
    <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </>);
}

export default Layout;