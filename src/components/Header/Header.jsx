import React from 'react'
import logoSoil from '../../images/pictos/LogoSoil.svg'
import headerRondVert from '../../images/HeaderRondVert.svg'

export const Header = () => {
    return (
        <div className='mainHeader'>
            <div className='logoContainer'>
             <img src={logoSoil} className='logoSoil' alt='logoSoil'/>
            </div>
            <img src={headerRondVert} className='headerRondVert' alt='lrondVert'></img>           
        </div>
    )
}
