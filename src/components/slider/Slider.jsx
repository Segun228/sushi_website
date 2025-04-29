import styles from "./slider.module.css"
import Carousel from "./carousel/Carousel";
const Slider = () => {
    return (
        <>
            <Carousel>
                <div className={styles.item+ " " + styles.item12}></div>
                <div className={styles.item+ " " + styles.item1}></div>
                <div className={styles.item+ " " + styles.item2}></div>
                <div className={styles.item+ " " + styles.item3}></div>
                <div className={styles.item+ " " + styles.item4}></div>
                <div className={styles.item+ " " + styles.item5}></div>
                <div className={styles.item+ " " + styles.item6}></div>
                <div className={styles.item+ " " + styles.item18}></div>
                <div className={styles.item+ " " + styles.item7}></div>
                <div className={styles.item+ " " + styles.item9}></div>
                <div className={styles.item+ " " + styles.item11}></div>
                <div className={styles.item+ " " + styles.item12}></div>
                <div className={styles.item+ " " + styles.item14}></div>
                <div className={styles.item+ " " + styles.item15}></div>
                <div className={styles.item+ " " + styles.item16}></div>
                <div className={styles.item+ " " + styles.item17}></div>
                
            </Carousel>
            
        </>
    );
}

export default Slider;