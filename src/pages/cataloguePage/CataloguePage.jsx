import SumItem from "../../components/sumItem/SumItem";
import styles from "./cataloguePage.module.css"
import data from "./../../data.js"
import { uid } from "uid";
import Item from "../../components/item/Item.jsx";
import useScrollToTop from "../../helpers/useScrollToTop.js";
const CataloguePage = () => {
    useScrollToTop()
    return ( <>
    <div className={styles.cataloguePage__title}>Каталог</div>
    <div className={styles.cataloguePage__wrapper}>
        <div className={styles.itemContainer}>
            {data.items.map((item)=>{
                return(
                    <Item key={uid()} item={item}></Item>
                );
            })}
        </div>
        <SumItem></SumItem>
    </div>
    </>);
}

export default CataloguePage;