import './header.css'
import logo_item from "./../../assets/vectors/sunrise.svg"
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setUserAuthActivity } from '../../store/mainSlice';
import { useState } from 'react';
const Header = () => {
    const stat = useSelector(store => store.main.authStatus)
    const dispatch = useDispatch()
    const [isMenuOpen, setIsMenuOpen] = useState(false);
        
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return ( 
        <>
        <div className="header-wrapper">
            <Link to="/">
            <div className="left__group">
                <img className="logo__box" src={logo_item} alt="Crimson Dragon" />
                <div className="logo__name__box">
                <span className="logo__header__title">Crimson Dragon</span>
                <span className="logo__header__caption">Премиум-доставка роллов</span>
                </div>
            </div>
            </Link>

            <button 
            className={`burger-menu ${isMenuOpen ? 'burger-menu--active' : ''}`}
            onClick={toggleMenu}
            aria-label="Меню"
            >
            <span></span>
            <span></span>
            <span></span>
            </button>

            <div className={`right__group ${isMenuOpen ? 'right__group--active' : ''}`}>
            <Link className="link__nav__item" to="/" onClick={() => setIsMenuOpen(false)}>
                <span className="nav__item">Главная</span>
            </Link>
            <Link className="link__nav__item" to="/catalogue" onClick={() => setIsMenuOpen(false)}>
                <span className="nav__item">Каталог</span>
            </Link>
            <Link className="link__nav__item" to="/cart" onClick={() => setIsMenuOpen(false)}>
                <span className="nav__item">Корзина</span>
            </Link>
            <Link className="link__nav__item" to="/" onClick={() => {
                dispatch(setUserAuthActivity());
                setIsMenuOpen(false);
            }}>
                <span className="nav__item">{stat}</span>
            </Link>
            </div>
        </div>
    </>

    );
}

export default Header;