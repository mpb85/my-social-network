import React from 'react';
import s from './Dialogs.module.css'
import NavLink from "react-router-dom/es/NavLink";

const DialogItem = (props) => {
    return(
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}> {props.name}</NavLink></div>
    )
};

const Massage = (props) =>{
    return(
        <div className={s.massage}>{props.massage}</div>
    )
}

const Dialogs = (props) => {
  return (
      <div className={`${s.dialogs} ${s.grid}`}>
          <div className={s.dialogsItem}>
              <DialogItem name='Роман' id='1'/>
              <DialogItem name='Сергей' id='2'/>
              <DialogItem name='Артем' id='3'/>
              <DialogItem name='Катя' id='4' />
              <DialogItem name='Маша' id='5'/>
              <DialogItem name='Яна' id='6'/>

          </div>
          <div className={s.massages}>
              <Massage massage ='Привет'/>
              <Massage massage ='Привет, как дела? '/>
              <Massage massage ='Привет, с ДР тебя!!!!!'/>

          </div>



      </div>
  )
};


export default Dialogs;