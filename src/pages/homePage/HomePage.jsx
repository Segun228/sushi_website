import Slider from "../../components/slider/Slider";
import "./homePage.css"
import susha from "./../../assets/vectors/maki.svg"
import roll from "./../../assets/vectors/roll.svg"
import ramen from "./../../assets/vectors/ramen.svg"
import ActionButton from "../../components/actionButton/ActionButton";
import { Link, ScrollRestoration } from "react-router-dom";
import useScrollToTop from "../../helpers/useScrollToTop";
const HomePage = () => {
    useScrollToTop()
    return (<>
    <div className="homePage__wrapper">
        <div className="homepage__title">Главная</div>
        <Slider></Slider>
        <div className="homePage__container">
            <div className="subContainer firstSubContainer">
                <div className="subContainer__title">Суши</div>
                <div className="subContainer__caption">Cвежайшая океаническая рыба у вас на тарелке</div>
                <img src={susha} alt="svg picture" className="svgshka" />
            </div>
            <div className="subContainer">
                <div className="subContainer__title">Роллы</div>
                <div className="subContainer__caption">Невероятные сочетания продуктов в одном блюде</div>
                <img src={roll} alt="svg picture" className="svgshka" />
            </div>
            <div className="subContainer">
                <div className="subContainer__title">Рамен</div>
                <div className="subContainer__caption">Суп, сохраняющий аромат и вкус каждого компонента</div>
                <img src={ramen} alt="svg picture" className="svgshka" />
            </div>
        </div>
        <div className="caption_subtitle">Погрузитесь в мир японской кухни</div>
        
            <Link to={"/catalogue"}>
                <ActionButton className="action" message="Выбрать блюда"></ActionButton>
            </Link>
        
        
    </div>
    </>);
}
 
export default HomePage;