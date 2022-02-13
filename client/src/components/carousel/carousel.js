import React, { useEffect, useState } from 'react';
import styles from './carousel.module.css'
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';


const banners = ['https://via.placeholder.com/600/92c952', 'https://via.placeholder.com/600/771796', 'https://via.placeholder.com/600/24f355'];
const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isFocused, setIsFocused] = useState(false);
    const handleNext = () => setActiveIndex(activeIndex => (activeIndex + 1) % banners.length);
    const handlePrev = () => setActiveIndex(activeIndex => (activeIndex -1 + banners.length) % banners.length);
    const handleGoTo = (index) => setActiveIndex(index);
    const handleMouseEnter = () => setIsFocused(true);
    const handleMouseLeave = () => setIsFocused(false);
    console.log(activeIndex)

    useEffect(() => {
        let intervalId;
        console.log(isFocused)
        if (!isFocused) {
            intervalId = setInterval(handleNext, 3000);
        }
        return () => {
            clearInterval(intervalId)
        };
    }, [isFocused]);
    return (
        <div className={styles.base} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className={styles.container}>
                {/* <button className={styles.arrowButton}>adfad</button> */}
                {banners.length && <button className={styles.arrowButtonLeft} onClick={handlePrev}>
                    <RiArrowDropLeftLine />
                </button>}
                <ul className={styles.carouselList}>
                    {
                        banners.map((url, index) => {
                            let a
                            if (activeIndex === 0) {
                                a = styles.carouselListItem0
                            }else if (activeIndex === 1) {
                                a = styles.carouselListItem1
                            }else if (activeIndex === 2) {
                                a = styles.carouselListItem2
                            }
                            return (
                            <li activeIndex={activeIndex} key={index} className={styles.carouselListItem, a}>
                                <img className={styles.carouselListItemImage} src={url} alt="" />
                            </li>
                        )})
                    }
                </ul>
                {banners.length && <button className={styles.arrowButtonRight} onClick={handleNext}>
                    <RiArrowDropRightLine />
                </button>}
            </div>
            <ul className={styles.nav}>
                {
                    Array.from({ length: banners.length }).map((_, index) =>{
                        const navButtonNm = activeIndex === index ? styles.navButton1 : styles.navButton2;
                        return (
                        <li className={styles.navItem}>
                            <button className={styles.navButton, `${navButtonNm}`} onClick={() => handleGoTo(index)} />
                            {/* <button className={styles.navButton, `${activeIndex === index ? styles.navButtonaaa : styles.navButtonbbb}`} onClick={() => handleGoTo(index)} /> */}
                        </li>
                        
                    )    
                })
                }
            </ul>
        </div>
    )
}

export default Carousel