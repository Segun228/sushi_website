import SumItem from "../../components/sumItem/SumItem";
import styles from "./cataloguePage.module.css"
import { uid } from "uid";
import Item from "../../components/item/Item.jsx";
import useScrollToTop from "../../helpers/useScrollToTop.js";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import catalogueRequest from "../../requests/catalogueRequest.js";
import { setCatalogue } from "../../store/mainSlice.js";
import Scroll from "../../components/scrollButton/Scroll.jsx";

const CataloguePage = () => {
    const dispatch = useDispatch()


    useEffect(() => {
        async function getCatalogue() {
        try {
            const catalogue = await catalogueRequest();
            dispatch(setCatalogue(catalogue));
            console.log(catalogue)
        } catch (error) {
            console.error("Ошибка при получении каталога", error);
        }
        }
        getCatalogue();
    }, []);

    let data = useSelector(store => store.main.catalogue)
    useScrollToTop()
    return ( <>
    <Scroll></Scroll>
    <div className={styles.cataloguePage__title}>Каталог</div>
    <div className={styles.cataloguePage__wrapper}>
        <div className={styles.itemContainer}>
            {data.data.map((item)=>{
                return(
                    <Item key={uid()} item={item}></Item>
                );
            })}
        </div>
        <SumItem className={styles.sumItem__wrapper}></SumItem>
    </div>
    </>);
}

export default CataloguePage;