import Header from "../header/Header";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import RegisterForm from "../registerForm/RegisterForm";
import LoginForm from "../logInForm/LogInForm";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";



const Layout = () => {
    const isRegistrated = useSelector(store => store.main.isRegistrated)
    const userAuthActivity = useSelector(store => store.main.userAuthActivity)
    const isLoggedIn = useSelector(store => store.main.isLoggedIn)
    return ( 
    <>
        <Header></Header>
        {!isRegistrated && userAuthActivity && !isLoggedIn && <RegisterForm></RegisterForm>}
        {isRegistrated && userAuthActivity && !isLoggedIn && <LoginForm></LoginForm>}
        <Outlet></Outlet>
        
        <Footer></Footer>
    </>);
}

export default Layout;