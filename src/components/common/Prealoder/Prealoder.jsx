import preloader from "../../../assets/images/preloader.gif";
import React from "react";
import s from './Prealoder.module.css'


const Prealoder = (props)=>{
    return(
        <>
            <img className={s.img} src={preloader}/>
        </>
        )

}

export default Prealoder;