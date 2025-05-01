import './header.css'
import logo_item from "./../../assets/png/susha.png"
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import RegisterForm from '../registerForm/RegisterForm';
import LoginForm from '../logInForm/LogInForm';
import { setUserAuthActivity } from '../../store/mainSlice';

const Header = () => {
    const stat = useSelector(store => store.main.authStatus)
    const dispatch = useDispatch()
    return ( 
        <>
        <div className="header-wrapper">
        <Link to="/">
            <div className="left__group">
                <img className="logo__box" src={logo_item}></img>
                <div className="logo__name__box">
                    <span className="logo__header__title">Jade Dragon</span>
                    <span className="logo__header__caption">Премиум-доставка роллов</span>
                </div>
            </div>
        </Link>
        <div className="right__group">
            <Link to="/"><span className="nav__item">Главная</span></Link>
            <Link to="/catalogue"><span className="nav__item">Каталог</span></Link>
            <Link to="/cart"><span className="nav__item">Корзина</span></Link>
            <Link to="/" ><span onClick={()=>dispatch(setUserAuthActivity())} className="nav__item" >{stat}</span></Link>
        </div>
        </div>
        </>
    );
}

export default Header;