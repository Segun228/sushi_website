import styles from "./scroll.module.css"
import useScrollToTop from "../../helpers/useScrollToTop";
import { IoIosArrowDropup } from "react-icons/io";
const Scroll = () => {
    return (<>
        <IoIosArrowDropup 
        className={styles.main}
        onClick={
            ()=>{window.scrollTo({ top: 0, behavior: 'smooth' });}
        }
        />
    </>);
}

export default Scroll;