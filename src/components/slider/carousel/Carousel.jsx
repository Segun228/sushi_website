import { useEffect, useState, Children, cloneElement } from "react";
import styles from "./Carousel.module.css"
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const Carousel = ({children}) => {
    const [pages, setPages] = useState([])
    const PAGE_WIDTH = 80
    const IMAGE_COUNT = Children.count(children)
    
    useEffect(()=>{
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: '100%',
                        maxWidth: '80vw',
                        minWidth: '80vw',
                        backgroundSize: 'cover',
                    },
                })
            })
        )
    }, [])

    const [offset, setOffset] = useState(0);
    const [counter, setCounter] = useState(0);

    const handleLeftArrowClick = () => {
        const newCounter = counter === 0 ? IMAGE_COUNT - 1 : counter - 1;
        setCounter(newCounter);
        setOffset(-newCounter * PAGE_WIDTH);
    }

    const handleRightArrowClick = () => {
        const newCounter = counter === IMAGE_COUNT - 1 ? 0 : counter + 1;
        setCounter(newCounter);
        setOffset(-newCounter * PAGE_WIDTH);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            handleRightArrowClick();
        }, 5000);
        return () => clearInterval(intervalId);
    }, [counter]); 

    return ( 
    <div className={styles.main_container}>
        <FaChevronLeft className={styles.arrow} onClick={handleLeftArrowClick}></FaChevronLeft>
        <div className={styles.window}>
            <div className={styles.all_items_container}
                style={{
                    transform: `translateX(${offset}vw)`,
                }}
            >
                {pages}
            </div>
        </div>
        <FaChevronRight className={styles.arrow} onClick={handleRightArrowClick}></FaChevronRight>
    </div>);
}

export default Carousel;