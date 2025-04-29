import "./Footer.css"
import vkLogo from "./../../assets/png/socials/vk.png"
import instLogo from "./../../assets/png/socials/inst.png"
import twitLogo from "./../../assets/png/socials/twit.png"
import telegLogo from "./../../assets/png/socials/tele.png"
const Footer = () => {
    return ( 
    <div className="footer__wrapper">
        <div className="footer__header">Наши контакты</div>
        <div className="footer__caption">Переходите и следите за нашей жизнью <br></br>и развитием в наших социальных сетях</div>
        <div className="footer__social__container">
            <a href="https://github.com/Segun228"><img src={vkLogo} alt="" className="social__item vk" /></a>
            <a href="https://github.com/Segun228"><img src={instLogo} alt="" className="social__item inst" /></a>
            <a href="https://github.com/Segun228"><img src={twitLogo} alt="" className="social__item twitter" /></a>
            <a href="https://github.com/Segun228"><img src={telegLogo} alt="" className="social__item telegram" /></a>
        </div>
    </div> );
}
 
export default Footer;