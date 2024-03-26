import { useState } from "react";
import data from "./data";
import React from "react";
import { CgChevronDoubleLeftR } from "react-icons/cg";
import { CgChevronDoubleRightR } from "react-icons/cg";
import { BsCircleFill } from "react-icons/bs";
import styles from "./styles.module.css";

function ImageSlider() {
    const [visited, setVisited] = useState(0);

    function leftClick() {
        setVisited((visited === 0) ? data.length - 1 : visited - 1);
    }

    function rightClick() {
        setVisited((visited === data.length - 1) ? 0 : visited + 1);
    }

    return (
        <main className={styles.imageSlider}>


            <div className={styles.imageContainer}>
                {data.map((x, index) => (
                    <React.Fragment>
                        <img
                            key={index}
                            src={x.photo}
                            alt={`photo-${index}`}
                            className={visited === index ? styles.active : ''}
                        />
                        <span onClick={leftClick} className={styles.icon + ' ' + styles.left}><CgChevronDoubleLeftR /></span>
                        <span onClick={rightClick} className={styles.icon + ' ' + styles.right}><CgChevronDoubleRightR /></span>
                        <div className={styles.iconContainer}>
                            {data.map((_, index) => (
                                <span
                                    key={index}
                                    className={`${styles.cIcon} ${visited === index ? styles.activeC : ''}`}
                                    onClick={() => setVisited(index)}
                                >
                                    <BsCircleFill />
                                </span>
                            ))}
                        </div>
                    </React.Fragment>
                ))}
            </div>



        </main>
    );
}

export default ImageSlider;
