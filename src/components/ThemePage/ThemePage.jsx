import React, {useState, useEffect} from 'react'
import LogoSoilLarge from '../../images/pictos/LogoSoilLarge.svg'
import { useLocation} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import ShowPictures from './ShowPictures'
import { Link } from 'react-router-dom'

export default function ThemePage({props}) {
    const [showForm, setShowForm]=useState(false)
    const [themeName, setThemeName] = useState()
    const [themeId, setThemeId] =useState()   
    const [themeDescription, setThemeDescritption] = useState()
    const location = useLocation()
    
    useEffect(()=>{
        if(props.location.props) {
            localStorage.setItem('themeName', props.location.props.theme.themeName)
            localStorage.setItem('themeId', props.location.props.theme._id)
            localStorage.setItem('description', props.location.props.theme.description)
            setThemeName(()=>props.location.props.theme.themeName)
            setThemeId(()=> props.location.props.theme._id)
            setThemeDescritption(()=> props.location.props.theme.description)
        }else {
            setThemeName(()=>localStorage.getItem('themeName'))
            setThemeId(()=>localStorage.getItem('themeId'))
            setThemeDescritption(()=>localStorage.getItem('description'))
        }
        
    },[location])
    

    return (
        
        <div className='themesHeader'>
            <img src={LogoSoilLarge} className='logoSoilLarge' alt='logoLarge'/>
            <div className='heroSubTitle'>{themeName}</div>
            <Link to='/themes' className="themePageButton back"><div >back to themes</div></Link>
            { themeId && <ShowPictures themeId={themeId} showForm={showForm} themeDescription={themeDescription} setShowForm={setShowForm}/>}   
        </div>
    )
}
