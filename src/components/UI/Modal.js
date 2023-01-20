import React, { Fragment } from 'react'
import classes from './Modal.module.css'
import ReactDom from 'react-dom'


const BackDrop=(props)=>{
return <div className={classes.backdrop}/>
}
const ModalOverLays=(props)=>{
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}
const portalElement=document.getElementById("overLays")

const  Modal=(props)=> {
  return (
   <Fragment>
    {ReactDom.createPortal(<BackDrop/>,portalElement)}
    {ReactDom.createPortal(<ModalOverLays>{props.children}</ModalOverLays>,portalElement)}
   </Fragment>
  )
}

export default Modal