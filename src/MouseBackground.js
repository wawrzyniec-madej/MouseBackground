import React, { useState } from 'react';

import styles from './MouseBackground.module.css';

function MouseBackground(props){

    const[backgroundTranslate,setBackgroundTranslate] = useState({

        x:0,
        y:0
        
    });

    function moveHandler(e){

        e.stopPropagation();

        let rect = e.target.getBoundingClientRect();

        // Position of mouse in parent
        let relMouseX = e.clientX - rect.x;
        let relMouseY = e.clientY - rect.y;

        // Position of mouse in relation to the center of parent
        let centerMouseX = relMouseX - rect.width/2;
        let centerMouseY = relMouseY - props.height/2;

        // Position of background in relation to maximum radious and the center of parent
        let backgroundRadiusX = Math.abs(centerMouseX) < props.radius ? centerMouseX : ( centerMouseX > 0 ? props.radius : -props.radius );
        let backgroundRadiusY = Math.abs(centerMouseY) < props.radius ? centerMouseY : ( centerMouseY > 0 ? props.radius : -props.radius );

        // Absolute factor of how far is the pointer from the end of parent
        let moveFactorX = Math.abs(centerMouseX/(rect.width/2));
        let moveFactorY = Math.abs(centerMouseY/(rect.height/2));

        setBackgroundTranslate({

            x: (backgroundRadiusX*moveFactorX)*(props.pushAway ? -1 : 1),
            y: (backgroundRadiusY*moveFactorY)*(props.pushAway ? -1 : 1)

        });


    }

    function leaveHandler(){

        setBackgroundTranslate({

            x:0,
            y:0

        });

    }

    function getStyle(){

        return({

            transform: `translateX(${backgroundTranslate.x}px) translateY(${backgroundTranslate.y}px)`,
            minHeight: props.cover ? `calc(100% + ${props.radius*2}px)` : null,
            maxHeight: props.cover ? null : `100%`,
            minWidth: props.cover ? `calc(100% + ${props.radius*2}px)` : null,

        });

    }

    return(

        <div className={styles.content} style={{height:props.height}} onMouseMove={(e)=>moveHandler(e)} onMouseLeave={ props.clearOnLeave ? leaveHandler : null}>

            <img alt={"Background"} style={ getStyle() } src={props.url} className={`${styles.image} ${props.cover ? styles.image_cover : styles.image_contain}`}/>

        </div>

    );


}

export default MouseBackground;