import Header from "../header/Header";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return ( 
    <>
    <Header></Header>
    <Outlet></Outlet>
    
    </>);
}
 
export default Layout;