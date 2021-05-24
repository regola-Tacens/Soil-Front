import React from 'react'
import LogoSoilFooter from '../../images/pictos/LogoSoilFooter.svg'

export default function Footer() {
    return (
        <div className='footer'>
            <img className='footerLogo' src={LogoSoilFooter} alt ='footerLogo'/>
            <div className = 'footerMenu'>
                <div className='footerButton'>Themes</div>
                <div className='footerButton'>Login</div>
                <div className='footerButton'>Signup</div>
                
            </div>
        </div>
    )
}
