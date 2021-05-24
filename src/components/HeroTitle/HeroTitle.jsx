import React from 'react'
import LogoSoilLarge from '../../images/pictos/LogoSoilLarge.svg'


export default function HeroTitle() {
    return (
        <div className='heroTitle'>
            <img src={LogoSoilLarge} className='logoSoilLarge' alt='logoLarge'/>
            <h3 className='heroSubTitle'>FEED & <span>SHARE</span> YOUR IDEAS</h3>
            <p>ORGANISE YOUR IDEAS AND SHARE WITH YOUR TEAM</p>
            {/* <div className='underline'></div> */}
        </div>
    )
}
