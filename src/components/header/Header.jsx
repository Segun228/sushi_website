import './header.css'
import logo_item from "./../../assets/png/susha.png"
const Header = () => {
    return ( 
        <>
        <div className="header-wrapper">
        <div className="left__group">
            <img className="logo__box" src={logo_item}></img>
            <div className="logo__name__box">
                <span className="logo__header__title">Jade Dragon</span>
                <span className="logo__header__caption">Премиум-доставка роллов</span>
            </div>
        </div>
        <div className="right__group">
            <span className="nav__item">Главная</span>
            <span className="nav__item">Каталог</span>
            <span className="nav__item">Корзина</span>
            <span className="nav__item">Личный кабинет</span>
        </div>
        </div>
        </>
    );
}

export default Header;