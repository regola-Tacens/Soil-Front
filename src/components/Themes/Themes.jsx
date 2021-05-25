import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { fetchThemes } from '../../actions/themes'
import GradientButton from '../UI/GradientButton'
import FormTheme from './FormTheme'
import Theme from './Theme/Theme'
import LogoSoilLarge from '../../images/pictos/LogoSoilLarge.svg'





export default function Themes() {
    const[showForm, setShowForm]=useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const themes = useSelector((state) =>state.themes)
    
    
    useEffect(()=>{
        dispatch(fetchThemes())
    },[])

    const handleCloseForm =(e)=>{
        e.preventDefault()
        setShowForm(prevState => !prevState)

    }


    return (
        <div className='themesHeader'>
            <img src={LogoSoilLarge} className='logoSoilLarge' alt='logoLarge'/>
            <div className='heroSubTitle'>SELECT A THEME</div>

            <GradientButton buttonName={'create a new theme'} clickAction={handleCloseForm} />
            {/* <div className='lowercaseBodyText toggleCreateTheme' onClick={()=>setShowForm(prevState => !prevState)}>{showForm ? 'close the window' : 'create a new theme'}</div> */}
            
             {showForm &&
            <FormTheme setShowForm={setShowForm} />
            }
            <div className="themesCards">
            {themes.map(theme =>(<Theme theme={theme} key={theme._id}/>))}
            </div>
            

        </div>
    )
}

