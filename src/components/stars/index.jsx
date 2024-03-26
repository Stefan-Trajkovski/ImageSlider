import { useState } from "react";
import React from "react";
import  styles from "./styles.module.css"
import { FaStar } from "react-icons/fa";  
import { useRef } from "react";  


 function Stars(){
    var array= Array.from({length:10});

    const [hoverIndex,setHoverIndex] =useState(null);
    const [clicked,setClicked]=useState(null);
    const faRef=useRef(null)

    function hoveredIndex(index){
        setHoverIndex(index)
    }
    function clickedStar(index){
        setClicked(index);
    }
    function funkcija(e){
       return faRef.current && !faRef.current.contains(e.target) ? setHoverIndex(null) : "" 

    }
    return (
    
        <main className={styles.stars} onClick={funkcija} >
            <div ref={faRef}>
            {array.map((x,index) => (
                <FaStar   className={hoverIndex >= index + 1 ? styles.hover : ""}
                    
                    key={index}
                    onMouseOver={()=>{hoveredIndex(index+1)}}
                    onMouseOut={()=>{setHoverIndex(clicked)}}
                    onClick={()=>{clickedStar(index+1)}}
                    size={40}
                />

            ))}
           </div>
            
            </main>


    );
}

export default Stars;