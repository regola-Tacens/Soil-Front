import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import closeCross from '../../../images/pictos/cross.svg'
import arrow from '../../../images/pictos/arrow.svg'
import FormTheme from '../FormTheme'
import { eraseTheme } from '../../../actions/themes'

export default function Theme({theme}) {
    const[showUpdateForm, setShowUpdateForm] = useState(false)

    const dispatch = useDispatch()

    const mouseOverGoButton = (e)=> {
        const goButton = document.getElementById(`go${theme._id}`)
        goButton.classList.add('goToTheme')
        goButton.innerHTML = `${theme.themeName}`
    }

    const mouseLeaveGoButton = (e) => {
        const goButton = document.getElementById(`go${theme._id}`)
        goButton.classList.remove('goToTheme')
        goButton.innerHTML = ""
    }

    const handleThemeUpdate=(e)=> {
        e.preventDefault()
        setShowUpdateForm(previousState => !previousState)
    }

    const handleThemeErase =(e)=> {
        e.preventDefault()
        dispatch(eraseTheme(theme._id))
    }


    return (
        <div className='themeContainer' > 
             <div className="themeinfos">
                <div className="titleText">{theme?.themeName}</div>
                <div className="overline"></div>
                <div className="lowercaseBodyText themeDesc">{theme?.description}</div>
                <div className="themePageMenu">
                    <div className='themePageButton' onClick={handleThemeUpdate} >update </div>
                    <div className='themePageButton' onClick={handleThemeErase}>erase </div>
                </div>
             </div>  
             
             <div className="headerImage" >
             {!showUpdateForm &&
                <div className='themeImage'>
                    <img src={theme?.headerImg} ></img>          
                </div>
            }
             {showUpdateForm &&
            <FormTheme setShowUpdateForm={setShowUpdateForm} themeToUpdate={theme} setShowForm={setShowUpdateForm}/>
            }
             </div>
            
            <Link to={{ pathname:"/themepage", props : {theme}}} >
                {theme?._id &&          
                
                <div className="goToTheme" id={`go${theme._id}`}></div>}     
                <div className="arrow">
                    <img src={arrow} alt="arrow" />
                </div>       
                <div className="goButton" id='goButton' 
                onMouseOver={mouseOverGoButton} 
                onMouseLeave={mouseLeaveGoButton}></div>
             </Link>
        </div>
    )
}
