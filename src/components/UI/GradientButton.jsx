import React from 'react'
import { Link } from 'react-router-dom'

export default function GradientButton({buttonName, buttonType, path, clickAction}) {


    return path ===undefined ? <button  className='mainStartButton' type={buttonType} onClick={clickAction} >{buttonName}</button> 
    : <Link to={path}>  <button  className='mainStartButton' type={buttonType} >{buttonName}</button></Link>


  
}
